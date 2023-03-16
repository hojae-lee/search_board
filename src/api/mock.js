const baseImageURL = 'images/mock/'

const qData = {
  data: {
    "topic": "AI를 활용한 마케팅 방법",
    "questions": [
      {
        "question": "(범위 - 대분류)당신은 어떤 마케터에 관심 있나요?",
        "choices": ["디지털", "브랜드", "이벤트", "PR", "콘텐츠", "그로스"]
      },
      {
        "question": "(지식 수준)당신은 마케터에 대해 어느 정도의 지식을 갖고 있나요?",
        "choices": ["상 (전문가 수준)", "중 (기본 지식)", "하 (아예 모름)"]
      },
      {
        "question": "(컨텐츠 미디어)어떤 방식으로 지식을 공유 받길 원하나요?",
        "choices": ["이미지와 동영상", "링크(SNS, 뉴스)"]
      },
      {
        "question": "(범위 - 소분류)어떤 유형의 지식이 중점적으로 필요한가요?",
        "choices": ["AI 최신 동향", "AI를 실무 활용 사례", "도서 및 강의 추천"]
      },
    ]
  }
}

const boardMock = {
  data: [
    {
      "type": "article",
      "URL": "https://www.ascentkorea.com/user-experience-and-ai-marketing-trends/",
      "title": "고객경험 AI 마케팅 중심 디지털 마케팅 트렌드",
      "description": "디지털 마케팅의 미래 전망에 대한 고객경험 ai 마케팅 전략과 마케팅 트렌드와 목표 및 전략 대응법 소개한다.",
      "imageURL": `${baseImageURL}ai-marketing-trends.png`
    },
    {
      "type": "article",
      "URL": "https://blog.naver.com/tbwa-datalab/223033308346  ",
      "title": "ChatGPT(챗GPT) 활용법 - 디지털 마케팅 ",
      "description": "고객 페르소나, 뉴스레터 작성, SNS 글 작성 등 디지털 마케팅에서 사용해본 ChatGPT에 대해 소개한다.",
      "imageURL": `${baseImageURL}tbwa-datalab.png`
    },
    {
      "type": "article",
      "URL": "https://polarishare.com/d/4ldqrdl",
      "title": "ChatGPT로 2분만에 마케터 기획안 작성하기 <기대효과 & SWOT 분석>",
      "description": "ChatGPT를 이용해 2분만에 마케팅 기획안을 효과적으로 작성하는 방법을 제시한다.",
      "imageURL": `${baseImageURL}41dqrdl.png`
    },
    {
      "type": "article",
      "URL": "https://www.appier.com/ko-kr/press-media/feature1_donga-com ",
      "title": "디지털 마케터는 데이터와 AI를 어떻게 활용할까? ",
      "description": "소비자의 다양한 스마트 기기 사용과 성향에 따른 광고 형식, 마케팅 퍼널 분석 등이 필수적인 디지털 마케팅에 대해 알아보고 전환율을 높이기 위해서는 사용자의 데이터를 적극적으로 활용하는 방법을 제시한다.",
      "imageURL": `${baseImageURL}donga.png`
    },
    {
      "type": "article",
      "URL": "https://www.aitimes.com/news/articleView.html?idxno=141196 ",
      "title": "디지털 마케팅의 총아로 떠오른 AI...데이터로 고객 관리한다 ",
      "description": "AI를 이용해 콘텐츠를 큐레이션하고, 생성해 적합한 플랫폼과 사람에 배치하고, 디지털 마케팅의 AI 기반 솔루션, 고객의 감정 해석 및 소통하는 사례를 소개한다.",
      "imageURL": `${baseImageURL}articleView.png`
    },
    {
      "type": "article",
      "URL": "https://www.ajunews.com/view/20220409070242751",
      "title": "[인터뷰] AI는 디지털 마케팅을 혁신한다, 애피어 슈드 린 박사",
      "description": "마케팅 단계 거칠수록 소비자 이탈률이 늘어나, 최종 구매자 늘리기 위해 AI 적극 활용해야 한다. 비대면 시대, AI로 마케팅 의사결정 신속화가 필요하다.",
      "imageURL": `${baseImageURL}20220409070242751.png`
    },
    {
      "type": "article",
      "URL": "https://tech95.kr/209",
      "title": "인공지능을 활용한 디지털 마케팅 사례",
      "description": "인공지능이 디지털 마케팅 분야에서 사용되어 기업의 마케팅 효율성을 높여 ROI를 향상시키는 사례를 소개하고, AI를 사용하여 데이터 분석을 자동화하고 예측 모델을 생성하여 만든 매출 증대와 추천 엔진 기술을 사용한 아마존, 구글, 페이스북 플랫폼 등 대표적인 예시를 보여준다.",
      "imageURL": `${baseImageURL}tech95.png`
    },
    {
      "type": "article",
      "URL": "https://brunch.co.kr/@thecontentsjin/10",
      "title": "챗GPT, 디지털 마케팅에서 어떻게 활용될 것인가? ",
      "description": "마케팅에서 ChatGPT 활용 가능성 및 이슈가 된 이유에 대해 설명한다.",
      "imageURL": `${baseImageURL}thecontentsjin.png`
    },
    {
      "type": "article",
      "URL": "https://www.youtube.com/watch?v=n8zKsFoo2FE",
      "title": "Top 10 AI Tools For Digital Marketing in 2023",
      "description": "에이전시 산업에 붐을 일으킨, 2023년 디지털 마케팅을 위한 10가지의 AI 툴에 대해 설명한다.",
      "imageURL": `${baseImageURL}youtube.png`
    },
    {
      "type": "website",
      "URL": "https://youtu.be/ZEzN0oQuEWA",
      "title": "‘보조인가 대체인가?’ 마케팅, 이커머스, 미디어의 생성AI 서비스 사례들",
      "description": "챗GPT, 미드저니, 달리 등에 우리가 충격을 받고 있지만, 이미 생성AI는 마케팅, 이커머스, 미디어 등 다양한 분야에서 서비스화되고 있다. 쇼피파이, 재스퍼, 포토룸, 노션과 네이버, 카카오 사례까지 생성AI 서비스들을 소개한다.",
      "imageURL": `${baseImageURL}ZEzN0oQuEWA.png`
    }
  ]
}

export { qData, boardMock }
