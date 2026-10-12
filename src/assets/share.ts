const shareButtons = document.querySelectorAll<HTMLButtonElement>(
  'button[aria-label="このページを共有"]',
);

for (const shareButton of shareButtons) {
  if (!navigator.share) {
    shareButton.classList.remove('inline-flex');
    shareButton.classList.add('hidden');
    continue;
  }

  shareButton.addEventListener('click', () => {
    void navigator
      .share({
        title: document.title,
        url: window.location.href,
      })
      .catch(() => undefined);
  });
}
