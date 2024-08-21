### BHND official site

## 디자인

    - 스카이
    - https://www.figma.com/file/hgZohWfU6bw2mm7JtVEPX9/BEHIND?type=design&node-id=0%3A1&mode=dev&t=Q53P6zbCSu7eqYg4-1

## 개발

    - 이안
    - 오웬
    - 데이빗

## 브랜치 전략

    1. git clone
        - 작업할 프로젝트 레포를 클론해줍니다.

    2. 개발할 issues 등록 (프로젝트 관리를 위해 등록 // github 페이지에서 진행)
        - issues
        - new issues
        - title 작성 (ex: nav 개발)
        - 내용 작성 (ex: 내용없으면 타이틀과 동일)
        - Assignees (본인선택)
        - Labels (본인라벨 선택)
        - Projects (official_site_ver_0.1)
        - submit new issue
        - Project 탭으로 가면 등록된 이슈가 'No Status' 상태인것을 확인
        - issue status : Todo로 변경하면 해당이슈가 Todo로 이동됨

    3. branch 생성 (vscode에서 진행)
        - git branch (현재 branch 목록 확인 // 현재위치 dev)
        - git branch 개발할 branch명 (ex: git branch nav // nav branch 생성)
        - git branch (branch 목록에 잘 생성되었는지 확인)
        - git checkout 개발할 branch명 (ex: git checkout nav // nav branch로 이동)

        개발완료후 커밋 진행
        - git add .
        - git commit -m "커밋메시지"
        - git push (해당 branch가 github에 존재하지 않아 에러메세지 발생하며 해당 메세지 복붙하면 편함)
        - git push --set-upstream origin nav (nav branch 등록 및 커밋된 파일 저장소로 업로드)

    4. 개발완료된 branch를 dev branch로 머지 (github 페이지에서 진행)
        - code 탭에서 등록한 branch 메세지 확인
        - Compare & pull request 클릭
        - description 간략한 내용 작성 (실무에서는 코드리뷰를 위해 아주 상세하게 적는다고 함, 대충 적으면 리젝당함)
        - merge전 코드리뷰가 필요할시 Reviewers에 리뷰어 등록
        - Assignees 본인 선택
        - Labels 본인 라벨 선택
        - Project 현재 프로젝트 선택
        - add a description 내용에 closes #(개발 완료된 이슈 선택) (완료되면 해당 이슈는 프로젝트에서 Done처리됨)
        - Create PR 클릭
        - Merge PR 클릭 (Merge는 코드리뷰어 승인이 끝난후 작업자 본인이 진행함)
        - Confirm Merge 클릭
        - Delete Branch 클릭 (개발 완료된 Branch는 더 이상 필요하지 않으므로 github에서 삭제)
        - Code 탭으로 돌아와 개발한 소스가 dev로 merge되었는지 확인
        - Branch 목록에 삭제되었는지 확인

    5. Local 저장소에 dev branch pull 및 개발 완료된 Branch 삭제
        - git branch (branch 리스트 확인)
        - git chekchout dev (dev Branch로 이동)
        - git pull (github 저장소와 소스 동기화)
        - git branch -D 삭제할branch명 (ex : git branch -D nav)

## 폴더 구조

    1. 개발환경 셋팅
    @초기폴더셋팅
    - npx create-next-app@latest (완료)
    - npm i로 설치 후 시작

    2. 폴더 설명
        @page.js
        - 메인페이지

        @layout.js
        - 메인페이지를 감싸고 있는 파일
        - 페이지 밖에 사용할 내용 (ex. 헤드태그안에 사용해야할 ui, 메뉴바, 푸터 등)

        @css
        - 폴더안에 각 영역별로 css를 만들고 layout.js에 import (추후에 하나로 합침)

        @section
        - 각 섹션별 js 생성 후 page.js(메인) import

        *app폴더 안에 폴더를 만들면 url이 자동생성(자동 라우팅)
        - 만든 폴더안에 page.js(고정)을 생성하여 코드작성
        - page.js 안에 export default function 필수

        * 로컬서버
        cd OFFICIAL-SITE 이동 후 npm run dev

        * 'use client'
        - 클라이언트 사이드 렌더링
        - 스크립트나, if문, for문 onClick 함수 useState 등 사용할때 최상단에 적용
