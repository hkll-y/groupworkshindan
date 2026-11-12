// 6タイプの診断結果データ
const RESULTS = {
  A: {
    code: "A",
    name: "アイデア型",
    skill: "発想力",
    icon: "💡",
    strengthShort: "新しい発想を生み出すこと",
    catchphrase: "あなたはチームの可能性を広げるアイデアメーカー！",
    description:
      "あなたは、これまでにない発想や新しい視点を生み出すことが好きなタイプです。ほかの人が思いつかないような意見を提案することで、チームの可能性を広げられます。",
    weakness:
      "アイデアをたくさん出すことに夢中になり、具体的な作業や細かい計画を立てることは後回しになりがちかもしれません。",
    roles: ["企画立案", "アイデア出し", "改善策の考案"],
    hint: "思いついたアイデアを実現する方法まで考えてみよう。"
  },
  B: {
    code: "B",
    name: "リサーチ型",
    skill: "情報収集・分析力",
    icon: "🔍",
    strengthShort: "正確な情報やデータを集めて分析すること",
    catchphrase: "あなたはチームを根拠で支える情報の専門家！",
    description:
      "あなたは、物事を感覚だけで判断せず、正確な情報やデータを大切にするタイプです。さまざまな資料を集めて比較することで、グループの意見に説得力を持たせられます。",
    weakness:
      "情報を詳しく調べることに集中しすぎて、結論を出すまでに時間がかかることもあるかもしれません。",
    roles: ["情報収集", "文献調査", "データ分析", "根拠の確認"],
    hint: "調べた情報の中から、本当に必要なものを選ぶ力も身につけよう。"
  },
  C: {
    code: "C",
    name: "ロジック型",
    skill: "整理・構成力",
    icon: "🧩",
    strengthShort: "情報を整理し、筋道を立てて考えること",
    catchphrase: "あなたはバラバラな意見を一つにする整理の達人！",
    description:
      "あなたは、複雑な情報や複数の意見を整理して、わかりやすい形にまとめることが得意なタイプです。話し合いの内容を整理したり、発表の流れを組み立てたりする場面で力を発揮できます。",
    weakness:
      "筋道を立てることを重視するあまり、自由な発想や直感的な意見を取り入れることが難しい場合もあるかもしれません。",
    roles: ["意見の整理", "発表構成", "文章作成", "内容の確認"],
    hint: "正しさだけでなく、面白さや意外性にも目を向けてみよう。"
  },
  D: {
    code: "D",
    name: "リーダー型",
    skill: "進行・調整力",
    icon: "🧭",
    strengthShort: "周囲に気を配り、話し合いを進めること",
    catchphrase: "あなたはみんなの力を引き出すチームのまとめ役！",
    description:
      "あなたは、周囲の状況を見ながら、メンバーが協力できる環境を作ることが得意なタイプです。話し合いを進めたり、一人ひとりの意見を引き出したりすることで、チーム全体の力を高められます。",
    weakness:
      "全員の意見を尊重しようとするあまり、自分自身の考えを後回しにしたり、決断に時間がかかったりすることもあるかもしれません。",
    roles: ["司会", "進行管理", "役割分担", "スケジュール管理"],
    hint: "周囲の意見を聞くだけでなく、自分の意見も積極的に伝えてみよう。"
  },
  E: {
    code: "E",
    name: "クリエイター型",
    skill: "表現・制作力",
    icon: "🎨",
    strengthShort: "図やデザインでわかりやすく表現すること",
    catchphrase: "あなたはアイデアを形に変えるチームの表現者！",
    description:
      "あなたは、伝えたい内容を図やデザインなど、目に見える形で表現することが好きなタイプです。見やすいスライドを作ったり、複雑な内容を図解したりすることで、グループの成果をより魅力的にできます。",
    weakness:
      "見た目や細かい部分にこだわりすぎて、予想以上に時間を使ってしまうこともあるかもしれません。",
    roles: ["スライド制作", "デザイン", "図解", "資料のレイアウト"],
    hint: "見た目の美しさだけでなく、相手に何を伝えたいかも意識しよう。"
  },
  F: {
    code: "F",
    name: "プレゼン型",
    skill: "伝達力",
    icon: "🎤",
    strengthShort: "考えを言葉にして相手にわかりやすく伝えること",
    catchphrase: "あなたはチームの考えを届ける伝えるスペシャリスト！",
    description:
      "あなたは、自分たちの考えを言葉にして、相手にわかりやすく伝えることが得意なタイプです。相手の反応を見ながら説明を工夫することで、グループの成果をより多くの人に理解してもらえます。",
    weakness:
      "説明の仕方に意識が向きすぎて、内容の細かな確認や資料の準備が後回しになることもあるかもしれません。",
    roles: ["発表", "質疑応答", "プレゼン原稿作成", "説明練習"],
    hint: "伝え方に加えて、内容を裏付ける根拠にも目を向けよう。"
  }
};

// Q1〜Q10の質問データ（点数に加算）
const QUESTIONS = [
  {
    question: "Q1. 新しいグループワークが始まった！あなたが最初にしたいことは？",
    options: [
      { text: "面白そうなアイデアをいくつか出してみる", type: "A" },
      { text: "課題に関係する情報や事例を調べる", type: "B" },
      { text: "何をどの順番で進めるか整理する", type: "C" },
      { text: "メンバーの意見を聞いて話し合いを始める", type: "D" }
    ]
  },
  {
    question: "Q2. 話し合いが行き詰まってしまった。あなたならどうする？",
    options: [
      { text: "今までとは違う角度から提案してみる", type: "A" },
      { text: "出ている意見を整理して、問題点を明らかにする", type: "C" },
      { text: "まだ話していない人にも意見を聞いてみる", type: "D" },
      { text: "今ある案の良さをわかりやすく説明してみる", type: "F" }
    ]
  },
  {
    question: "Q3. 課題について調査することになった！どの作業を担当したい？",
    options: [
      { text: "信頼できる資料やデータを探す", type: "B" },
      { text: "集めた情報を比較して共通点を見つける", type: "C" },
      { text: "調査結果をグラフや図にまとめる", type: "E" },
      { text: "調査結果の重要な点をみんなに説明する", type: "F" }
    ]
  },
  {
    question: "Q4. 発表用のスライドを作ることに。あなたがこだわりたいのは？",
    options: [
      { text: "話の順番や内容のつながり", type: "C" },
      { text: "文字の配置や色、全体の見やすさ", type: "E" },
      { text: "説明を裏付けるデータや資料の正確さ", type: "B" },
      { text: "発表するときの言葉選びや伝わりやすさ", type: "F" }
    ]
  },
  {
    question: "Q5. グループの作業がなかなか進まない。あなたなら？",
    options: [
      { text: "それぞれができることを確認して分担する", type: "D" },
      { text: "もっと効率的な進め方を考えて提案する", type: "A" },
      { text: "わからない部分を調べて解決の糸口を探す", type: "B" },
      { text: "まず試作品や資料の一部を作ってみる", type: "E" }
    ]
  },
  {
    question: "Q6. メンバーの意見が二つに分かれた！あなたの行動は？",
    options: [
      { text: "双方の意見を聞いて、話し合いを調整する", type: "D" },
      { text: "二つの案の長所と短所を比較して整理する", type: "C" },
      { text: "それぞれの案の魅力をわかりやすく説明する", type: "F" },
      { text: "両方の良さを取り入れた第三の案を考える", type: "A" }
    ]
  },
  {
    question: "Q7. 提出まであと少し！あなたが優先したいのは？",
    options: [
      { text: "残り時間と作業状況を確認し、分担を調整する", type: "D" },
      { text: "資料の見た目や細かい部分を仕上げる", type: "E" },
      { text: "内容に矛盾や抜けがないか確認する", type: "C" },
      { text: "発表の練習をして、伝え方を改善する", type: "F" }
    ]
  },
  {
    question: "Q8. 先生から「もっと工夫が必要」と言われた。まず何をする？",
    options: [
      { text: "他の事例や資料を調べて改善点を探す", type: "B" },
      { text: "今までになかった新しい方向性を考える", type: "A" },
      { text: "指摘された問題の原因を整理する", type: "C" },
      { text: "メンバーに意見を聞いて改善方針を決める", type: "D" }
    ]
  },
  {
    question: "Q9. グループワークで役割を自由に選べるなら？",
    options: [
      { text: "みんなの前で発表する", type: "F" },
      { text: "スライドや図などを制作する", type: "E" },
      { text: "関連情報やデータを集めて分析する", type: "B" },
      { text: "企画やアイデアを考える", type: "A" }
    ]
  },
  {
    question: "Q10. 発表後に改善の時間がもらえた！あなたがしたいことは？",
    options: [
      { text: "内容の根拠や情報の正確さを確認する", type: "B" },
      { text: "スライドのデザインや図を改善する", type: "E" },
      { text: "改善点をメンバーと共有し、作業を割り振る", type: "D" },
      { text: "説明の仕方を見直して、より伝わる発表にする", type: "F" }
    ]
  }
];

// Q11の選択肢データ（点数には加算しない）
const Q11_ROLES = [
  {
    id: "role_A",
    type: "A",
    title: "アイデア出し・企画立案",
    sub: "新しい企画や解決策を考える",
    actionHint: "自由な発想で案を広げつつ、自分の得意な視点から実現性を高める工夫を取り入れてみる"
  },
  {
    id: "role_B",
    type: "B",
    title: "情報収集・調査",
    sub: "必要な情報やデータを集め、分析する",
    actionHint: "必要なデータや事例を集めながら、自分の強みを活かしてチームに共有する"
  },
  {
    id: "role_C",
    type: "C",
    title: "意見の整理・構成",
    sub: "みんなの意見をまとめ、発表の流れを考える",
    actionHint: "全体の構成や論点の整理に関わりながら、チームの議論を形にしていく"
  },
  {
    id: "role_D",
    type: "D",
    title: "司会・進行管理",
    sub: "話し合いを進め、役割分担や時間を管理する",
    actionHint: "全体の進行や時間配分に目を配りながら、メンバーの意見をつなぐ役割を担う"
  },
  {
    id: "role_E",
    type: "E",
    title: "スライド制作・デザイン",
    sub: "発表資料や図などを制作する",
    actionHint: "視覚的に伝わるスライドや図解の制作に挑戦し、内容の魅力を引き出す"
  },
  {
    id: "role_F",
    type: "F",
    title: "発表・プレゼンテーション",
    sub: "グループの成果をわかりやすく発表する",
    actionHint: "発表内容の準備とあわせて、実際のプレゼンにも参加して聞き手に届ける"
  },
  {
    id: "role_NONE",
    type: "NONE",
    title: "特に希望はない・みんなに合わせたい",
    sub: "チームの状況に応じて役割を決めたい",
    actionHint: ""
  }
];

// 状態管理
let currentQuestionIndex = 0;
let answerHistory = []; // Q1〜Q10の回答履歴
let selectedQ11Ids = []; // Q11で選んだID配列

// DOM要素
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const q11Screen = document.getElementById("q11-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const backBtn = document.getElementById("back-btn");
const q11BackBtn = document.getElementById("q11-back-btn");
const submitBtn = document.getElementById("submit-btn");
const retryBtn = document.getElementById("retry-btn");

const questionNumberEl = document.getElementById("question-number");
const progressPercentEl = document.getElementById("progress-percent");
const progressFillEl = document.getElementById("progress-fill");
const questionTextEl = document.getElementById("question-text");
const optionsContainerEl = document.getElementById("options-container");
const q11OptionsEl = document.getElementById("q11-options");
const q11ErrorEl = document.getElementById("q11-error");

// 画面切り替え
function showScreen(screen) {
  [startScreen, quizScreen, q11Screen, resultScreen].forEach((s) =>
    s.classList.remove("active")
  );
  screen.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// 診断開始
function startQuiz() {
  currentQuestionIndex = 0;
  answerHistory = [];
  selectedQ11Ids = [];
  showScreen(quizScreen);
  renderQuestion();
}

// Q1〜Q10の描画
function renderQuestion() {
  const totalSteps = QUESTIONS.length + 1; // 全11問
  const currentQ = QUESTIONS[currentQuestionIndex];
  const progress = Math.round(((currentQuestionIndex + 1) / totalSteps) * 100);

  questionNumberEl.textContent = `Q${currentQuestionIndex + 1} / ${totalSteps}`;
  progressPercentEl.textContent = `${progress}%`;
  progressFillEl.style.width = `${progress}%`;
  questionTextEl.textContent = currentQ.question;

  backBtn.style.display = currentQuestionIndex > 0 ? "inline-block" : "none";

  optionsContainerEl.innerHTML = "";
  currentQ.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `
      <span class="option-num">${idx + 1}</span>
      <span>${opt.text}</span>
    `;
    btn.addEventListener("click", () => selectOption(opt.type));
    optionsContainerEl.appendChild(btn);
  });
}

// Q1〜Q10選択時
function selectOption(type) {
  answerHistory[currentQuestionIndex] = type;

  if (currentQuestionIndex < QUESTIONS.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    showQ11();
  }
}

// Q1〜Q10で戻る
function goBack() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

// Q11（チェックボックス画面）の表示
function showQ11() {
  q11ErrorEl.style.display = "none";
  renderQ11Options();
  showScreen(q11Screen);
}

// Q11のチェックボックス描画＆排他制御
function renderQ11Options() {
  q11OptionsEl.innerHTML = "";
  const isNoneSelected = selectedQ11Ids.includes("role_NONE");
  const hasOtherSelected = selectedQ11Ids.some((id) => id !== "role_NONE");

  Q11_ROLES.forEach((role, index) => {
    const isChecked = selectedQ11Ids.includes(role.id);
    // 「特に希望はない」選択時は他を無効化、他の選択肢選択時は「特に希望はない」を無効化
    const isDisabled =
      (role.id !== "role_NONE" && isNoneSelected) ||
      (role.id === "role_NONE" && hasOtherSelected);

    const label = document.createElement("label");
    label.className = `checkbox-item ${isChecked ? "checked" : ""} ${
      isDisabled ? "disabled" : ""
    }`;

    label.innerHTML = `
      <input type="checkbox" value="${role.id}" ${isChecked ? "checked" : ""} ${
      isDisabled ? "disabled" : ""
    }>
      <div class="checkbox-content">
        <span class="checkbox-title">${index + 1}. ${role.title}</span>
        <span class="checkbox-sub">${role.sub}</span>
      </div>
    `;

    const checkbox = label.querySelector("input");
    checkbox.addEventListener("change", (e) => {
      q11ErrorEl.style.display = "none";
      if (e.target.checked) {
        if (role.id === "role_NONE") {
          selectedQ11Ids = ["role_NONE"];
        } else {
          selectedQ11Ids = selectedQ11Ids.filter((id) => id !== "role_NONE");
          selectedQ11Ids.push(role.id);
        }
      } else {
        selectedQ11Ids = selectedQ11Ids.filter((id) => id !== role.id);
      }
      renderQ11Options();
    });

    q11OptionsEl.appendChild(label);
  });
}

// AIからの役割提案文を生成する関数
function generateAIProposal(mainType, subType, chosenRoles) {
  const mainInfo = RESULTS[mainType];
  const subInfo = RESULTS[subType];

  // 「特に希望はない」の場合
  if (chosenRoles.some((r) => r.id === "role_NONE")) {
    return `あなたは${mainInfo.strengthShort}が得意な${mainInfo.name}（サブ：${subInfo.name}）です。今回はチームの状況に合わせて柔軟に動きたいと考えているようなので、まずは得意な「${mainInfo.roles[0]}」や「${mainInfo.roles[1]}」を中心にサポートしつつ、不足している役割を引き受けるとチーム全体のバランスがぐっと良くなります！`;
  }

  // 選んだ役割が1つの場合
  if (chosenRoles.length === 1) {
    const target = chosenRoles[0];
    if (target.type === mainType) {
      return `あなたは${mainInfo.strengthShort}が得意な${mainInfo.name}で、今回挑戦したい「${target.title}」はまさにあなたの強みが一番輝く役割です！さらにサブタイプの${subInfo.name}の視点も活かしながら進めることで、チーム全体を力強く引っ張っていけるはずです。`;
    } else if (target.type === subType) {
      return `あなたは${mainInfo.strengthShort}が得意な${mainInfo.name}ですが、サブ特性として持つ${subInfo.name}の力を活かして「${target.title}」に挑戦するのはとても良い選択です！得意な「${mainInfo.roles[0]}」の視点を土台にしながら、${target.actionHint}とさらに成果が高まります。`;
    } else {
      return `あなたは${mainInfo.strengthShort}が得意な${mainInfo.name}ですが、今回は「${target.title}」にも挑戦したいと考えているようです。得意な「${mainInfo.roles[0]}」や「${mainInfo.roles[1]}」の力を活かしつつ、${target.actionHint}のはいかがでしょうか？`;
    }
  }

  // 複数の役割を選んだ場合
  const roleNames = chosenRoles.map((r) => `「${r.title}」`).join("と");
  const hasMainRole = chosenRoles.some((r) => r.type === mainType);

  if (hasMainRole) {
    return `あなたは${mainInfo.strengthShort}が得意な${mainInfo.name}で、今回は${roleNames}に挑戦したいと考えているようです。自分の強みと重なる部分でしっかり土台を作りつつ、新しい領域にも一歩踏み出すことで、作業同士のつながりがスムーズになりチームに大きく貢献できます！`;
  } else {
    return `あなたは${mainInfo.strengthShort}が得意な${mainInfo.name}ですが、今回は${roleNames}という新しい役割にも意欲的に挑戦したいと考えているようです。まずは得意な「${mainInfo.roles[0]}」の視点で全体を支えながら、メンバーと役割を分担して挑戦してみると無理なく力を発揮できます！`;
  }
}

// 結果の集計と表示
function showResult() {
  if (selectedQ11Ids.length === 0) {
    q11ErrorEl.style.display = "block";
    return;
  }

  // Q1〜Q10のスコア集計
  const scores = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };
  answerHistory.forEach((type) => {
    if (scores[type] !== undefined) {
      scores[type]++;
    }
  });

  // スコア順にソート（同点の場合は後半の質問で選んだタイプを優先）
  const sortedTypes = ["A", "B", "C", "D", "E", "F"].sort((a, b) => {
    if (scores[b] !== scores[a]) {
      return scores[b] - scores[a];
    }
    return answerHistory.lastIndexOf(b) - answerHistory.lastIndexOf(a);
  });

  const mainType = sortedTypes[0];
  const subType = sortedTypes[1];

  const res = RESULTS[mainType];
  const subRes = RESULTS[subType];
  const chosenRoles = Q11_ROLES.filter((r) => selectedQ11Ids.includes(r.id));

  // メイン・サブタイプ表示
  document.getElementById("result-icon").textContent = res.icon;
  document.getElementById("result-main-title").textContent = `あなたは${res.name}！`;
  document.getElementById("result-subtype-badge").textContent = `サブタイプ：${subRes.name}`;
  document.getElementById("result-catch").textContent = res.catchphrase;
  document.getElementById("result-desc").textContent = res.description;
  document.getElementById("result-weak").textContent = res.weakness;
  document.getElementById("result-hint").textContent = res.hint;

  // おすすめの役割リスト
  const rolesListEl = document.getElementById("result-roles");
  rolesListEl.innerHTML = "";
  res.roles.forEach((role) => {
    const li = document.createElement("li");
    li.textContent = role;
    rolesListEl.appendChild(li);
  });

  // あなたが挑戦したい役割リスト
  const challengeListEl = document.getElementById("result-challenges");
  challengeListEl.innerHTML = "";
  chosenRoles.forEach((role) => {
    const li = document.createElement("li");
    li.textContent = role.title;
    challengeListEl.appendChild(li);
  });

  // AIからの役割提案
  document.getElementById("ai-proposal-text").textContent = generateAIProposal(
    mainType,
    subType,
    chosenRoles
  );

  // 6タイプバランスバー
  const scoreBarsContainer = document.getElementById("score-bars");
  scoreBarsContainer.innerHTML = "";
  const maxPossible = 7;

  ["A", "B", "C", "D", "E", "F"].forEach((code) => {
    const info = RESULTS[code];
    const score = scores[code];
    const widthPercent = Math.min(100, Math.round((score / maxPossible) * 100));
    const isTop = code === mainType;

    const row = document.createElement("div");
    row.className = "score-row";
    row.innerHTML = `
      <span class="score-label">${info.icon} ${info.name}</span>
      <div class="score-bar-bg">
        <div class="score-bar-fill ${isTop ? "top" : ""}" style="width: ${widthPercent}%"></div>
      </div>
      <span class="score-val">${score}点</span>
    `;
    scoreBarsContainer.appendChild(row);
  });

  showScreen(resultScreen);
}

// イベントリスナー
startBtn.addEventListener("click", startQuiz);
backBtn.addEventListener("click", goBack);
q11BackBtn.addEventListener("click", () => {
  currentQuestionIndex = QUESTIONS.length - 1;
  showScreen(quizScreen);
  renderQuestion();
});
submitBtn.addEventListener("click", showResult);
retryBtn.addEventListener("click", startQuiz);