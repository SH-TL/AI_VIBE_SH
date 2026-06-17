---
name: gh-cli
description: >
  GitHub CLI(gh) 명령어를 실행하고 GitHub 작업을 수행하는 스킬. PR 생성/조회/머지, 이슈 관리,
  레포지토리 작업, 릴리즈 관리, 워크플로우 실행 등 gh 명령어가 필요한 모든 GitHub 작업에 적극적으로 사용한다.
  사용자가 "PR 만들어줘", "이슈 올려줘", "브랜치 확인해줘", "GitHub에서 뭔가 해줘", "gh로 ~해줘",
  "레포 정보 보여줘", "릴리즈 만들어줘", "워크플로우 돌려줘" 등 GitHub 관련 작업을 언급하면 반드시 이 스킬을 사용한다.
---

# GitHub CLI (gh) 스킬

GitHub CLI(`gh`) 명령어를 통해 GitHub 작업을 효율적으로 수행한다.
`gh`는 PR, 이슈, 레포지토리, 릴리즈, 워크플로우 등 GitHub의 거의 모든 기능을 터미널에서 직접 다룰 수 있게 해준다.

## 핵심 원칙

1. **항상 실행 전 확인**: 삭제, 머지, 닫기 등 되돌리기 어려운 작업은 사용자에게 한 번 확인한다
2. **오류 시 원인 파악**: 실패하면 `gh auth status`로 인증 상태를 먼저 확인한다
3. **결과를 사람이 읽기 좋게 출력**: JSON 출력보다는 `--format` 또는 테이블 형태로 보여준다
4. **현재 디렉토리 컨텍스트 활용**: 대부분의 gh 명령은 현재 git 레포를 자동으로 감지한다

---

## 자주 쓰는 명령어 카테고리

### 인증 / 상태 확인
```bash
gh auth status                    # 인증 상태 확인
gh auth login                     # 로그인
gh auth token                     # 현재 토큰 출력
```

### Pull Request
```bash
# 조회
gh pr list                        # 열린 PR 목록
gh pr list --state all            # 전체 PR
gh pr view <번호>                  # PR 상세 보기
gh pr view --web                  # 브라우저로 열기

# 생성
gh pr create --title "제목" --body "내용"
gh pr create --draft              # 드래프트 PR
gh pr create --base main --head feature-branch

# 관리
gh pr merge <번호>                 # 머지 (--merge/--squash/--rebase)
gh pr close <번호>                 # 닫기
gh pr checkout <번호>              # 로컬에 체크아웃
gh pr review <번호> --approve      # 승인
gh pr review <번호> --request-changes --body "코멘트"
```

### Issues
```bash
# 조회
gh issue list                     # 열린 이슈 목록
gh issue view <번호>               # 이슈 상세
gh issue list --assignee @me      # 내가 담당한 이슈

# 생성 / 관리
gh issue create --title "제목" --body "내용"
gh issue create --label "bug,priority:high"
gh issue close <번호>
gh issue reopen <번호>
gh issue comment <번호> --body "댓글"
```

### Repository
```bash
gh repo view                      # 현재 레포 정보
gh repo view <owner/repo>         # 특정 레포
gh repo clone <owner/repo>        # 클론
gh repo create <이름>              # 새 레포 생성
gh repo fork                      # 포크
gh repo list <owner>              # 레포 목록
```

### Releases
```bash
gh release list                   # 릴리즈 목록
gh release view <태그>             # 릴리즈 상세
gh release create <태그> --title "v1.0" --notes "변경사항"
gh release upload <태그> <파일경로> # 파일 업로드
gh release delete <태그>           # 삭제 (확인 필요)
```

### Actions / Workflows
```bash
gh workflow list                  # 워크플로우 목록
gh workflow run <이름>             # 워크플로우 실행
gh run list                       # 최근 실행 목록
gh run view <run-id>              # 실행 상세
gh run watch <run-id>             # 실행 상태 모니터링
gh run download <run-id>          # 아티팩트 다운로드
```

### Gists
```bash
gh gist list                      # Gist 목록
gh gist create <파일>              # Gist 생성
gh gist view <id>                 # Gist 보기
```

---

## 작업 패턴

### PR 생성 플로우
사용자가 PR 생성을 요청하면:
1. 현재 브랜치 확인: `git branch --show-current`
2. 변경 내용 파악: `git log main..HEAD --oneline`
3. 제목/본문 초안 작성 (커밋 메시지 기반)
4. `gh pr create` 실행 — `--body`는 heredoc이나 파일로 전달
5. 생성된 PR URL을 사용자에게 알린다

### 이슈 생성 플로우
1. 사용자 요청에서 제목과 내용 추출
2. 적절한 레이블 제안 (bug, enhancement, question 등)
3. `gh issue create` 실행
4. 생성된 이슈 URL 제공

### 멀티라인 본문 처리 (중요)
PowerShell/Windows에서는 heredoc 대신 임시 파일 방식을 사용한다:
```powershell
$body = @"
이슈 내용
여러 줄
"@
$body | gh issue create --title "제목" --body-file -
```

또는:
```powershell
$body | Out-File -Encoding utf8 $env:TEMP\gh_body.md
gh pr create --title "제목" --body-file $env:TEMP\gh_body.md
```

---

## 출력 형식 커스터마이징

```bash
# JSON으로 받아서 특정 필드만 추출
gh pr list --json number,title,state

# Go 템플릿으로 포맷
gh pr list --template '{{range .}}#{{.number}} {{.title}}{{"\n"}}{{end}}'

# jq와 조합 (Bash)
gh api repos/{owner}/{repo}/issues | jq '.[].title'
```

---

## API 직접 호출

`gh api`로 GitHub REST/GraphQL API를 직접 호출할 수 있다:

```bash
# REST
gh api repos/{owner}/{repo}
gh api repos/{owner}/{repo}/issues --method POST --field title="버그" --field body="내용"

# GraphQL
gh api graphql -f query='{ viewer { login } }'
```

---

## 자세한 참고 자료

복잡한 작업이나 잘 모르는 명령어는 다음을 활용한다:
- `gh <command> --help` — 세부 옵션 확인
- `gh help` — 전체 명령어 목록
- `references/advanced.md` — 고급 사용 패턴 (GraphQL, 자동화, CI/CD 연동)

---

## 오류 대처

| 오류 | 원인 | 해결 |
|------|------|------|
| `not authenticated` | 로그인 안 됨 | `gh auth login` |
| `not a git repository` | git 레포가 아님 | `--repo owner/repo` 플래그 추가 |
| `403 Forbidden` | 권한 부족 | 토큰 스코프 확인 (`gh auth status`) |
| `422 Unprocessable` | 잘못된 입력 | 필드명/값 형식 확인 |
