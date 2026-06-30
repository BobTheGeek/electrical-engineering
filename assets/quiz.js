/* ============================================================
   Reusable quiz widget for the electronics course.
   Retrieval-practice format: multiple choice with immediate,
   automatic feedback. No external dependencies.

   Usage in a lesson:
     <div class="quiz" data-quiz></div>
     <script src="../assets/quiz.js"></script>
     <script>
       renderQuiz(document.currentScript.previousElementSibling, [
         {
           q: "Question text?",
           options: ["Choice one here", "Choice two here", "Choice three ok"],
           answer: 0,
           why: "Explanation shown after answering."
         },
         ...
       ]);
     </script>

   Keep all options the same length where possible — no formatting tells.
   ============================================================ */

(function () {
  const STYLE = `
  .quiz { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          border: 1px solid var(--rule, #e2e0d8); border-radius: 8px;
          padding: 1.2rem 1.4rem; margin: 1.6rem 0; background: #fff; }
  .quiz h3 { font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase;
             color: var(--muted, #6b6b6b); margin: 0 0 1rem; font-weight: 700; }
  .quiz .q { margin: 0 0 1.4rem; }
  .quiz .q:last-of-type { margin-bottom: 0.4rem; }
  .quiz .q-text { font-weight: 600; margin: 0 0 0.6rem; line-height: 1.4; }
  .quiz .opt { display: block; width: 100%; text-align: left; cursor: pointer;
               border: 1px solid var(--rule, #e2e0d8); background: #fbfbf8;
               border-radius: 6px; padding: 0.55rem 0.8rem; margin: 0.35rem 0;
               font-size: 0.92rem; transition: background 0.12s, border-color 0.12s; }
  .quiz .opt:hover:not(:disabled) { border-color: var(--accent-2, #1f6f8b); background: #f1f6f7; }
  .quiz .opt:disabled { cursor: default; }
  .quiz .opt.correct  { background: #e8f5e9; border-color: #2e7d32; color: #1b5e20; }
  .quiz .opt.wrong    { background: #fdecec; border-color: #c62828; color: #b71c1c; }
  .quiz .why { font-size: 0.88rem; margin: 0.5rem 0 0; padding: 0.6rem 0.8rem;
               background: var(--highlight, #fff6d6); border-radius: 6px; display: none; line-height: 1.45; }
  .quiz .why.show { display: block; }
  .quiz .score { font-weight: 700; margin-top: 1rem; font-size: 0.95rem; color: var(--accent-2, #1f6f8b); }
  `;

  if (!document.getElementById('quiz-style')) {
    const s = document.createElement('style');
    s.id = 'quiz-style';
    s.textContent = STYLE;
    document.head.appendChild(s);
  }

  window.renderQuiz = function (container, items) {
    let answered = 0, correct = 0;
    const total = items.length;

    const head = document.createElement('h3');
    head.textContent = 'Check yourself — recall, don’t peek';
    container.appendChild(head);

    const scoreEl = document.createElement('div');
    scoreEl.className = 'score';

    items.forEach((item) => {
      const qDiv = document.createElement('div');
      qDiv.className = 'q';

      const qText = document.createElement('p');
      qText.className = 'q-text';
      qText.textContent = item.q;
      qDiv.appendChild(qText);

      const why = document.createElement('div');
      why.className = 'why';
      why.textContent = item.why;

      item.options.forEach((optText, i) => {
        const btn = document.createElement('button');
        btn.className = 'opt';
        btn.textContent = optText;
        btn.addEventListener('click', function () {
          if (qDiv.dataset.done) return;
          qDiv.dataset.done = '1';
          answered++;
          const buttons = qDiv.querySelectorAll('.opt');
          buttons.forEach(b => b.disabled = true);
          if (i === item.answer) {
            btn.classList.add('correct');
            correct++;
          } else {
            btn.classList.add('wrong');
            buttons[item.answer].classList.add('correct');
          }
          why.classList.add('show');
          if (answered === total) {
            scoreEl.textContent = `You got ${correct} of ${total}. ` +
              (correct === total ? 'Solid — that’s stored, not just familiar.'
                                 : 'Re-read the ones you missed, then ask your teacher anything unclear.');
          }
        });
        qDiv.appendChild(btn);
      });

      qDiv.appendChild(why);
      container.appendChild(qDiv);
    });

    container.appendChild(scoreEl);
  };
})();
