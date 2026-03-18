/* ========================================
   Advance Learning — Theme JavaScript
   Shared interactive components
   ======================================== */

document.addEventListener('DOMContentLoaded', function () {

  // --- Progress Tracker ---
  (function initProgress() {
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    if (!progressFill) return;

    const sections = document.querySelectorAll('.blog-section');
    if (!sections.length) return;

    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = Math.min(Math.round((scrollTop / docHeight) * 100), 100);
      progressFill.style.width = percent + '%';
      progressText.textContent = percent + '% Complete';
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  })();

  // --- Code Playground ---
  document.querySelectorAll('.code-playground').forEach(function (playground) {
    var editor = playground.querySelector('.code-editor');
    var output = playground.querySelector('.code-output');
    var runBtn = playground.querySelector('.run-btn');
    var resetBtn = playground.querySelector('.reset-btn');
    var originalCode = editor ? editor.textContent : '';

    if (runBtn && editor && output) {
      runBtn.addEventListener('click', function () {
        output.classList.add('visible');
        output.classList.remove('error');
        try {
          // Capture console.log output
          var logs = [];
          var originalLog = console.log;
          var originalError = console.error;
          console.log = function () {
            logs.push(Array.from(arguments).map(function (a) {
              return typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a);
            }).join(' '));
          };
          console.error = function () {
            logs.push('Error: ' + Array.from(arguments).join(' '));
          };

          var code = editor.textContent || editor.innerText;
          var result = new Function(code)();
          console.log = originalLog;
          console.error = originalError;

          var outputText = logs.join('\n');
          if (result !== undefined && !logs.length) {
            outputText = String(result);
          }
          output.textContent = outputText || '(no output)';
        } catch (e) {
          console.log = originalLog;
          console.error = originalError;
          output.textContent = 'Error: ' + e.message;
          output.classList.add('error');
        }
      });
    }

    if (resetBtn && editor) {
      resetBtn.addEventListener('click', function () {
        editor.textContent = originalCode;
        if (output) {
          output.textContent = '';
          output.classList.remove('visible', 'error');
        }
      });
    }

    // Handle Tab key in editors
    if (editor) {
      editor.addEventListener('keydown', function (e) {
        if (e.key === 'Tab') {
          e.preventDefault();
          document.execCommand('insertText', false, '  ');
        }
      });
    }
  });

  // --- Quiz Handler ---
  document.querySelectorAll('.quiz-card').forEach(function (quiz) {
    var correct = quiz.getAttribute('data-correct');
    var options = quiz.querySelectorAll('.quiz-option');
    var feedback = quiz.querySelector('.quiz-feedback');
    var answered = false;

    options.forEach(function (opt) {
      opt.addEventListener('click', function () {
        if (answered) return;
        answered = true;

        var selected = opt.getAttribute('data-index');
        options.forEach(function (o) {
          if (o.getAttribute('data-index') === correct) {
            o.classList.add('is-correct');
          } else {
            o.classList.add('is-incorrect');
          }
        });

        if (feedback) {
          feedback.classList.add('visible');
          if (selected === correct) {
            feedback.classList.add('correct');
            feedback.textContent = feedback.getAttribute('data-correct-text') || 'Correct!';
          } else {
            feedback.classList.add('incorrect');
            feedback.textContent = feedback.getAttribute('data-incorrect-text') || 'Not quite. See the highlighted answer above.';
          }
        }
      });
    });
  });

  // --- Step Reveal ---
  document.querySelectorAll('.step-reveal').forEach(function (container) {
    var steps = container.querySelectorAll('.step');
    var nextBtn = container.querySelector('.next-step-btn');
    var currentStep = 0;

    function showStep(index) {
      steps.forEach(function (s, i) {
        s.classList.remove('is-active');
        if (i < index) s.classList.add('is-completed');
      });
      if (steps[index]) {
        steps[index].classList.add('is-active');
        steps[index].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    if (steps.length) showStep(0);

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        if (currentStep < steps.length - 1) {
          currentStep++;
          showStep(currentStep);
        }
        if (currentStep >= steps.length - 1) {
          nextBtn.textContent = 'All steps complete!';
          nextBtn.disabled = true;
          nextBtn.style.opacity = '0.5';
        }
      });
    }

    // Click on step headers to navigate
    steps.forEach(function (step, i) {
      var header = step.querySelector('.step-header');
      if (header) {
        header.addEventListener('click', function () {
          if (i <= currentStep) {
            currentStep = i;
            showStep(i);
            if (nextBtn) {
              nextBtn.textContent = 'Next Step →';
              nextBtn.disabled = false;
              nextBtn.style.opacity = '1';
            }
          }
        });
      }
    });
  });

  // --- Terminal Simulator ---
  document.querySelectorAll('.terminal-sim').forEach(function (terminal) {
    var input = terminal.querySelector('.terminal-input');
    var output = terminal.querySelector('.terminal-output');
    var commandsAttr = terminal.getAttribute('data-commands');
    var commands = {};

    if (commandsAttr) {
      try {
        commands = JSON.parse(commandsAttr);
      } catch (e) {
        // Commands can also be set via JS
      }
    }

    if (input) {
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          var cmd = input.value.trim();
          if (!cmd) return;

          var cmdLine = document.createElement('div');
          cmdLine.innerHTML = '<span class="cmd">$ ' + escapeHtml(cmd) + '</span>';
          output.appendChild(cmdLine);

          var resultLine = document.createElement('div');
          resultLine.classList.add('result');
          if (commands[cmd]) {
            resultLine.textContent = commands[cmd];
          } else if (terminal._commandHandler) {
            resultLine.textContent = terminal._commandHandler(cmd);
          } else {
            resultLine.innerHTML = '<span class="error-text">Command not found: ' + escapeHtml(cmd) + '</span>';
          }
          output.appendChild(resultLine);

          input.value = '';
          terminal.querySelector('.terminal-body').scrollTop = terminal.querySelector('.terminal-body').scrollHeight;
        }
      });
    }
  });

  // --- Flip Cards ---
  document.querySelectorAll('.flip-card').forEach(function (card) {
    card.addEventListener('click', function () {
      card.classList.toggle('is-flipped');
    });
  });

  // --- Drag and Drop ---
  document.querySelectorAll('.drag-drop-zone').forEach(function (zone) {
    var items = zone.querySelectorAll('.drag-item');
    var targets = zone.querySelectorAll('.drop-target');
    var feedback = zone.querySelector('.drag-feedback');

    items.forEach(function (item) {
      item.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData('text/plain', item.getAttribute('data-value'));
        e.dataTransfer.effectAllowed = 'move';
        item.style.opacity = '0.5';
      });

      item.addEventListener('dragend', function () {
        item.style.opacity = '1';
      });
    });

    targets.forEach(function (target) {
      target.addEventListener('dragover', function (e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        target.classList.add('drag-over');
      });

      target.addEventListener('dragleave', function () {
        target.classList.remove('drag-over');
      });

      target.addEventListener('drop', function (e) {
        e.preventDefault();
        target.classList.remove('drag-over');

        var value = e.dataTransfer.getData('text/plain');
        var accept = target.getAttribute('data-accept');

        if (value === accept) {
          target.classList.add('is-correct');
          target.textContent = zone.querySelector('[data-value="' + value + '"]').textContent;
          var draggedItem = zone.querySelector('[data-value="' + value + '"]');
          if (draggedItem) draggedItem.style.display = 'none';

          if (feedback) {
            feedback.innerHTML = '<span style="color:var(--color-success)">Correct!</span>';
          }
        } else {
          target.classList.add('is-incorrect');
          setTimeout(function () {
            target.classList.remove('is-incorrect');
          }, 1000);
          if (feedback) {
            feedback.innerHTML = '<span style="color:var(--color-error)">Try again!</span>';
          }
        }
      });
    });
  });

  // --- Scroll Animation ---
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.blog-section').forEach(function (section) {
      observer.observe(section);
    });
  }

  // --- Utility: HTML Escape ---
  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

});
