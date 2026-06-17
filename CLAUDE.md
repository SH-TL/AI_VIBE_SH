# AI_VIBE_SH 프로젝트

## 리포지터리 정보

- **GitHub 리포지터리**: https://github.com/SH-TL/AI_VIBE_SH
- **기본 브랜치**: main

## 작업 완료 후 업로드 규칙

**매 작업이 끝날 때마다** 다음 절차를 따른다:

1. 변경된 파일을 `git add`로 스테이징한다.
2. 작업 내용을 요약한 커밋 메시지로 `git commit`을 생성한다.
3. `/gh-cli` 스킬을 활용해 `git push`로 `https://github.com/SH-TL/AI_VIBE_SH` 리포지터리에 업로드한다.

### 커밋 메시지 형식

```
<type>: <작업 요약>

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```

**type 종류**:
- `feat` — 새 기능 추가
- `fix` — 버그 수정
- `docs` — 문서 수정
- `refactor` — 코드 리팩토링
- `chore` — 설정, 빌드 등 기타 변경

### 업로드 절차 예시

작업 완료 후 아래 순서로 실행한다:

```bash
git add <변경된 파일>
git commit -m "feat: 작업 내용 요약"
git push origin main
```

또는 `/gh-cli` 스킬을 호출해 PR을 생성하거나 직접 push할 수 있다.

## 주의사항

- `.env`, 시크릿 키, 인증 정보가 포함된 파일은 절대 커밋하지 않는다.
- 커밋 전 `git status`로 스테이징 대상을 반드시 확인한다.
- 리포지터리가 초기화되지 않은 경우 `git init` 후 remote를 추가한다:
  ```bash
  git remote add origin https://github.com/SH-TL/AI_VIBE_SH.git
  ```
