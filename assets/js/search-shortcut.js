// Cmd+K / Ctrl+K jumps to the topbar search. The key hint is injected here
// rather than in the template so visitors without JS never see a dead hint.
(() => {
  const search = document.getElementById('search');
  const input = document.getElementById('search-input');
  const mobileTrigger = document.getElementById('search-trigger');

  if (!search || !input) {
    return;
  }

  const platform = navigator.userAgentData?.platform ?? navigator.platform ?? '';
  const isApple = /mac|iphone|ipad/i.test(platform);

  const hint = document.createElement('kbd');
  hint.className = 'search-shortcut';
  hint.setAttribute('aria-hidden', 'true');
  hint.textContent = isApple ? '⌘K' : 'Ctrl K';
  search.append(hint);
  input.setAttribute('aria-keyshortcuts', isApple ? 'Meta+K' : 'Control+K');

  document.addEventListener('keydown', (event) => {
    const modifier = isApple ? event.metaKey : event.ctrlKey;

    if (!modifier || event.altKey || event.shiftKey || event.key.toLowerCase() !== 'k') {
      return;
    }

    event.preventDefault();

    // Below the `lg` breakpoint the input is collapsed behind a trigger button.
    if (mobileTrigger && mobileTrigger.offsetParent !== null) {
      mobileTrigger.click();
    } else {
      input.focus();
      input.select();
    }
  });
})();
