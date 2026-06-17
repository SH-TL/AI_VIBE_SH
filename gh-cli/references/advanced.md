# gh CLI 고급 사용 패턴

## GraphQL 쿼리 활용

```bash
# PR에 연결된 이슈 조회
gh api graphql -f query='
{
  repository(owner: "owner", name: "repo") {
    pullRequest(number: 42) {
      closingIssuesReferences(first: 10) {
        nodes { number title }
      }
    }
  }
}'

# 내 PR 리뷰 요청 목록
gh api graphql -f query='
{
  search(query: "is:pr is:open review-requested:@me", type: ISSUE, first: 20) {
    nodes {
      ... on PullRequest { number title url repository { nameWithOwner } }
    }
  }
}'
```

## 자동화 패턴

### PR 자동 머지 (CI 통과 후)
```bash
gh pr merge --auto --squash <번호>
```

### 여러 이슈 한 번에 닫기
```bash
gh issue list --state open --json number -q '.[].number' | \
  xargs -I {} gh issue close {}
```

### 릴리즈 자동 생성 (최근 태그 기준)
```bash
PREV_TAG=$(gh release list --limit 1 --json tagName -q '.[0].tagName')
gh release create v1.2.0 \
  --generate-notes \
  --notes-start-tag "$PREV_TAG"
```

## CI/CD 연동

### GitHub Actions에서 gh 사용
```yaml
- name: Create issue on failure
  if: failure()
  run: |
    gh issue create \
      --title "CI 실패: ${{ github.workflow }}" \
      --body "Run: ${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }}"
  env:
    GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### 환경 변수로 인증
```bash
export GH_TOKEN=ghp_xxxx
gh pr list  # 토큰 자동 사용
```

## 레포지토리 없는 환경에서 사용

```bash
# --repo 플래그로 명시적 지정
gh issue list --repo microsoft/vscode
gh pr view 1234 --repo facebook/react

# 환경 변수 설정
export GH_REPO=owner/repo
gh pr list  # 자동으로 해당 레포 사용
```

## Windows PowerShell 특이사항

```powershell
# 파이프로 body 전달 시 인코딩 주의
$body = "한글 내용 포함"
$body | Out-File -Encoding utf8 "$env:TEMP\body.md"
gh issue create --title "테스트" --body-file "$env:TEMP\body.md"

# JSON 파싱
$prs = gh pr list --json number,title | ConvertFrom-Json
$prs | ForEach-Object { "PR #$($_.number): $($_.title)" }
```

## 확장 프로그램

```bash
gh extension list              # 설치된 확장 목록
gh extension install <repo>    # 확장 설치
gh extension browse            # 마켓플레이스 탐색
```

유용한 공식 확장:
- `gh-copilot`: GitHub Copilot CLI
- `gh-dash`: 대시보드 TUI
- `gh-markdown-preview`: 마크다운 미리보기
