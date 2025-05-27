---
title: My CSS snnipets for obsidian
date: 2024-04-30
tags:
  - obsidian
  - productivity
  - CSS
  - programmation
status: 🚀
public_notes: true
public_note: true
public_note1: true
---
## Description
A list of the CSS snippets I currently use in Obsidian.
## Tasks Plugin
```css
/* Priority as Checkbox Color and Remove the Emoji */
.task-list-item[data-task-priority="highest"] input[type=checkbox] {
    box-shadow: 0px 0px 2px 2px #ff006e;
    border-color: #ff006e;
}

.task-list-item[data-task-priority="normal"] input[type=checkbox] {
    box-shadow: 0px 0px 2px 2px #2b2d42;
    border-color: #2b2d42;
}

.task-list-item[data-task-priority="high"] input[type=checkbox] {
    box-shadow: 0px 0px 1px 1px var(--color-red);
    border-color: var(--color-red);
}

.task-list-item[data-task-priority="medium"] input[type=checkbox] {
    box-shadow: 0px 0px 1px 1px var(--color-orange);
    border-color: var(--color-orange);
}

.task-list-item[data-task-priority="low"] input[type=checkbox] {
    box-shadow: 0px 0px 1px 1px var(--color-cyan);
    border-color: var(--color-cyan);
}


input[type=checkbox]:checked {
    box-shadow: none !important;
    border-color: var(--checkbox-border-color) !important;
}

.task-description {
    margin-left:3px;
}


.tasks-group-heading p {
    margin-left:2.2em;
    font-size: 0.9em !important;
    padding-bottom: 0.1px !important;
    color: #8fbaff !important;
}

.cm-preview-code-block.cm-embed-block.markdown-rendered, .block-language-tasks {
    background-color: rgba(20, 18, 20, 0.986);
    border: 0.1em solid #373634;
    overflow: hidden; /* truncar elementos */
}
.block-language-tasks span {
    margin-left: 1px;
}


.block-language-tasks li {
  white-space: nowrap; 
  text-overflow: ellipsis;

.block-language-tasks li:hover {
  white-space: normal;
  overflow: visible; 
  text-overflow: unset; 
  background-color: rgba(188, 187, 187, 0.3);
}
```







## Omnivore Plugin
```css
/* Callouts for Omnivore Highlights */
.callout[data-callout="yellow"] {
--callout-color: 244, 188, 91;
}

.callout[data-callout="red"] {
--callout-color: var(--callout-error);
}

.callout[data-callout="green"] {
--callout-color: var(--callout-success);
}

.callout[data-callout="blue"] {
--callout-color: var(--callout-info);

}

/* clase añadida con dataviewjs para contar tasks */
.vista-row {
    display: inline-block; 
    margin-right: 10px;
    
}

/* clase añadida con dataviewjs mostrar resumen de tags */
.mostrar-tags span a {
  margin-top: 0.8em;
  display: inline-block;
  text-overflow: ellipsis;
  

}

.mostrar-tags span {
  position: relative;
  display: block; 
  margin: 10px; 

}


/* para mostrar agrupados por status con dataviewjs */
.omni-title {
  font-size: 1em;
  margin-left: 15px;
}

.omni-par {
  white-space: nowrap;
}

.omni-par li:hover {
   white-space: normal; 
  overflow: visible; 
  text-overflow: unset;
}

.omni-par ul {
  margin-bottom: 0.2rem;
  margin-top: 0.2rem;
  padding-left: 20px;
}

p.omni-par {
  margin-bottom: 0.2rem;
  margin-top: 0.2rem;
  
}
```

## Backgrounds
```css
/* Background color for notes */

.fondo-blue {
    background-color: rgb(8, 9, 24);
}

.fondo-pastel {
    background-color: rgba(45, 59, 63, 0.988);
    filter: invert(1);
    color: hsl(0, 0%, 100%);
}

.fondo-pastel .markdown-embed,.fondo-pastel .callout, .fondo-pastel .metadata-content, .fondo-pastel .HyperMD-quote, .fondo-pastel .edit-block-button,  .fondo-pastel .code-styler-line, .fondo-pastel .code-styler-header-container,.fondo-pastel .code-styler-pre {
    filter: invert(1) !important;
    background-color: rgb(17, 15, 15) !important;

}
.fondo-dark {
background: rgb(0, 0, 0);
}
```

## Links
```css
/* Estilo para los enlaces algunos no van en el modo source*/

.markdown-source-view .internal-link, .cm-hmd-internal-link .cm-underline {
    color: rgb(249, 165, 255) !important;
}
.markdown-source-view .internal-link, .cm-hmd-internal-link .cm-underline::after {
    content: " 🔗";
}

.external-link, .cm-hmd-external-link, .cm-link .cm-underline, .cm-link, .cm-url .cm-underline, .cm-url {
    color: rgb(162, 200, 233) !important;
}

.markdown-preview-view .internal-link {
    color: rgb(226, 169, 251) !important;
}

.markdown-preview-view .external-link {
    color: rgba(159, 221, 226, 0.986) !important;
    text-decoration: none;
}

/* Estilo para los enlaces con el formato específico vscode y files */
.markdown-source-view a[href^="file://"] {
    color: rgb(165, 234, 165) !important;
    text-decoration: none;
}

.markdown-preview-view a[href^="file://"] {
    color: rgb(134, 218, 134) !important;
    text-decoration: none;
}

/* Estilo para los enlaces con el formato específico zotero collections */
.markdown-source-view a[href^="zotero://select/library/collections/"] {
    color: rgb(244, 244, 144) !important;
    text-decoration: none;
}

.markdown-preview-view a[href^="zotero://select/library/collections/"] {
    color: rgb(244, 244, 144) !important;
    text-decoration: none;
}

/* Estilo enlaces zotero items */
.markdown-source-view a[href^="zotero://select/library/items/"] {
    color: rgb(244, 196, 144) !important;
    text-decoration: none;
}

.markdown-preview-view a[href^="zotero://select/library/items/"] {
    color: rgb(244, 196, 144) !important;
    text-decoration: none;
}

/* Estilo para los iconos zotero collections*/
.markdown-source-view a[href^="zotero://select/library/collections/"]::after,
.markdown-preview-view a[href^="zotero://select/library/collections/"]::after {
    content: "📚";
    margin-left: 5px;
    color: rgb(244, 244, 144) !important;
    text-decoration: none;
}

/* Estilo para los iconos zotero items*/
.markdown-source-view a[href^="zotero://select/library/items/"]::after,
.markdown-preview-view a[href^="zotero://select/library/items/"]::after {
    content: "📕";
    margin-left: 5px;
    color: rgb(244, 244, 144) !important;
    text-decoration: none;
}

/* Estilo para los iconos vscode y files */
.markdown-source-view a[href^="file://"]::after,
.markdown-preview-view a[href^="file://"]::after {
    content: "💻";
    margin-left: 5px;
    color: rgb(165, 234, 165) !important;
    text-decoration: none;
}
```

## Outliner
```css
/* Recursive font colors for headers in the outline pane list */
.tree-item > .tree-item-self {
    color: #ff9af0; /* Level 1 color */
  }
  
  .tree-item > .tree-item-children > .tree-item > .tree-item-self {
    color: #fbdec1; /* Level 2 color */
  }
  
  div.tree-item > div.tree-item-children > div.tree-item > div.tree-item-children > div.tree-item > div.tree-item-self {
    color: #cad1cf; /* Level 3 color */
  }

  div.tree-item > div.tree-item-children > div.tree-item > div.tree-item-children > div.tree-item > .tree-item-children > .tree-item > .tree-item-self {
    color: #f872fd; /* Level 4 color */
  }

  div.tree-item > div.tree-item-children > div.tree-item > div.tree-item-children > div.tree-item > .tree-item-children > .tree-item > .tree-item-children > .tree-item > .tree-item-self {
    color: #ff6bd3; /* Level 5 color */
  }
  
  /* Add more levels as needed */

```

## Tables
```css
/*  Estilos para tablas y listas */
.td:first-child {
    text-align: center;
}

.table-view-table {
    border: 0.1em solid #373634;
    border-collapse: collapse;
}

.dataview.table-view-table tbody tr {
    border: 0.1em solid #373634;
}

/* Ajuste para la última fila */
.dataview.table-view-table tbody tr:last-child {
    border-bottom: none;
}

/* Bordes entre columnas */
.dataview.table-view-table tbody tr td {
    border-right: 0.1em solid #373634;
    /* Bordes sólidos de 1px */
}

/* Ajuste para la última columna */
.dataview.table-view-table tbody tr td:last-child {
    border-right: none;
}

.table-view-th,
.table-view-td {
    border: 0.1em solid #373634 !important;
    padding: 2px !important;
    text-align: center !important;
}

.table-view-th {
    background-color: #0b0b0c !important;
}

td {
    padding: 0.2em !important;
}

/* Espacio alrededor de las etiquetas en la segunda columna */
.dataview.table-view-table tbody tr td:nth-child(2) span {
    padding: 0.2em !important;
}

.dataview.table-view-table tbody tr td:nth-child(3),
.dataview.table-view-table tbody tr td:nth-child(4) {
    text-align: center !important;
}

/* lista en dataview, afecta a tablas */
.block-language-dataview.node-insert-event {
    background-color: rgba(20, 18, 20, 0.986);
    border: 0.1em solid #373634;
}
/* quitar borde extra de listas y tablas */
.cm-preview-code-block, .cm-preview-code-block.cm-embed-block.markdown-rendered {
    border: none !important;
}

/* quitar borde de links embebidos */
.markdown-embed {
    border: none;
    padding: 0;
}

/* icono de link de los embebidos */
.markdown-embed-link {
  right: 0.9em;
  margin-top: 0.5em; 
}


/* Estilos para truncar texto en las listas */
.dataview.list-view-ul li {
  white-space: nowrap; 
  text-overflow: ellipsis; 
}
.dataview.list-view-ul li:hover {
   white-space: normal; 
  overflow: visible; 
  text-overflow: unset; 
}
```

## Utils
```css
/* tamaño de los tags */
td .tag, li .tag, p .tag {
    font-size: 0.6em !important;
    white-space: nowrap;
    
}

/* Ocultar headers de links embebidos */
.hide-embedded-header1 .markdown-embed h3,
.hide-embedded-header1 .markdown-embed h2,
.hide-embedded-header1 .markdown-embed h1 {
    display: none;
}

/* ocultar titulo nombre de archivo */
.hide-titulo .inline-title {
    display: none;
}

/* Ocultar properties */
.workspace-leaf-content[data-mode="preview"] .markdown-preview-view.hide_properties .metadata-container {
    display: none;
}

/* Tamaño de vista */
.wide {
    --file-line-width: 1000px;
}

```

## Hide Boomarks icon
```css
/* Ocultar el ícono de marcador en la barra de pestañas */
.mod-bookmark.mod-bookmarked.mod-filled {
    display: none !important;
}
```
