# Hello Static — Город пешком

Авторский сайт о городских прогулках на чистых HTML, CSS и JavaScript.

## 📸 Скриншоты

### Сайт
![Главная страница сайта](screenshots/website.png)

### Успешный GitHub Actions
![Успешный запуск CI/CD](screenshots/github-actions.png)

### Настройки GitHub Pages
![Сайт опубликован через GitHub Actions](screenshots/github-pages-settings.png)

## 🌐 Сайт

[Открыть сайт на GitHub Pages](https://anitouchq.github.io/hello-static/)

## 📂 Структура

```text
hello-static/
├── .github/workflows/ci-cd.yml
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── screenshots/
│   ├── website.png
│   ├── github-actions.png
│   └── github-pages-settings.png
└── README.md
```

## 🔁 CI/CD

Push в `main` запускает проверки сайта, затем GitHub Actions публикует `public/` на Pages.

Автор: [anitouchq](https://github.com/anitouchq)