---
date: 2025-10-26 13:44
title: surfing keys vim in browser
keywords:
source:
status: 📌
Parent: "[[Area-Sistemas]]"
public_note: "true"
category: Sistemas
tags:
  - Productividad
  - sistemas
---
# surfing keys vim in browser
`$= dv.current().file.tags.join(" ")`

- [VIM](/sistemas/vim/)
- mapear navegador y controlar solo con teclado
- brookhongSurfingkeys Map your keys for web surfing, 
- [Browse the Web in Neovim - YouTube](https://www.youtube.com/watch?v=RxUhQaI4HUw) 
- [Surfingkeys - Chrome Web Store](https://chromewebstore.google.com/detail/surfingkeys/gfbliohnnapiefjpjlpjnehglfpaknnc) 
- Surfingkeys – A better alternative for vimium or cVim-surfingkeys.html 
## shortcuts

{% raw %}
```python
Rich shortcuts to click links/switch tabs/scroll, capture pages, use your browser like vim for productivity.

A Chrome extension for Vim users, but EMACS users would also love it, as it is much extendable with javascript.

# to click links

    f   Open a link, press SHIFT to flip hints if they are overlapped.
    C   Open a link in non-active new tab
    cf  Open multiple links in a new tab
    gf  Open a link in non-active new tab
    af  Open a link in new tab

# to switch tabs

    E    Go one tab left
    R    Go one tab right
    x    Close current tab
    X    Restore closed tab
    W    New window with current tab
    J    Move current tab to left
    K    Move current tab to right
    yt   Duplicate current tab
    <<   Move current tab to left
    >>   Move current tab to right
    g0   Go to the first tab
    g$   Go to the last tab
    gx0  Close all tabs on left
    gxt  Close tab on left
    gxT  Close tab on right
    gx$  Close all tabs on right

# to scroll pages / DIVs

    0    Scroll all the way to the left
    e    Scroll a page up
    d    Scroll a page down
    gg   Scroll to the top of the page
    G    Scroll to the bottom of the page
    j    Scroll down
    k    Scroll up
    h    Scroll left
    l    Scroll right
    $    Scroll all the way to the right
    %    Scroll to percentage of current page
    cS   Reset scroll target
    cs   Change scroll target

# to capture full pages / DIV

    yG   Capture current full page
    yS   Capture scrolling element

# to search seleted with kinds of search engines

    sg   Search selected with google
    sw   Search selected with bing
    sy   Search selected with youtube
    sb   Search selected with baidu

# to edit input with vim editor

    Ctrl-i   Go to edit box with vim editor

# to edit URL with vim editor

    su   Edit current URL with vim editor
```
{% endraw %}
