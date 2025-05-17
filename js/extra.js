/* 

By default, the header repo link always opens in the same tab.
MkDocs Material does not provide a built-in option in mkdocs.yml to make this open in a new tab.
It is a known request but not supported out-of-the-box for accessibility and UX consistency reasons.
I add this small custom JS snippet that targets that link and makes it open in a new tab.

*/ 

document.addEventListener('DOMContentLoaded', function() {
    var repoLink = document.querySelector('.md-header__source a');
    if (repoLink) {
      repoLink.setAttribute('target', '_blank');
      repoLink.setAttribute('rel', 'noopener');
    }
  });
  