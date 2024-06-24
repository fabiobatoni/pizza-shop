## Front-end Pizza-shop

[![React](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=black&style=for-the-badge)](https://react.dev/)
[![Vite](https://img.shields.io/badge/-Vite-purple?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org/)
[![Zod](https://img.shields.io/badge/zod-0E2E58?logo=zod&logoColor=white&style=for-the-badge)](https://zod.dev)
[![shadcn/ui](https://img.shields.io/badge/shadcnui-black?logo=shadcnui&logoColor=white&style=for-the-badge)](https://ui.shadcn.com)
[![Tailwind](https://img.shields.io/badge/tailwindcss-007FFF?logo=tailwindcss&logoColor=white&style=for-the-badge)](https://tailwindcss.com)
[![ReactQuery](https://img.shields.io/badge/reactquery-ffa500?logo=reactquery&logoColor=black&style=for-the-badge)](https://tanstack.com/query/v3)
[![Vitest](https://img.shields.io/badge/vitest-7CFC00?logo=vitest&logoColor=black&style=for-the-badge)](https://vitest.dev)

## 1. Introduction

### 1.1 Challenge Overview


This project focuses on exercising both the concepts we saw about React, as well as communicating with APIs via HTTP requests. Also present tests in frontend application. Pizzeria management application (administrator dashboard) using Vite, React Router DOM, React Hook Form, shadcn/ui, React Query, Vitest and more!


 ![Pizza-shop GIF](public\pizza-shop.gif)

## 2. Getting Started for Developers

To set up a local copy of this repository:

- For SSH (recommended for secure, key-based authentication), use:

  ```bash
  git@github.com:fabiobatoni/pizza-shop.git
  ```

- For HTTPS (simpler setup, ideal for quick trials), use:

  ```bash
  https://github.com/fabiobatoni/pizza-shop.git
  ```

### 2.1 Installation

Follow these steps to set up the Pizza.shop environment on your local
machine:

1. **Clone the Repository and Change Directory**

```bash
cd pizza-shop
```

2. **Install Project Dependencies**

In the project directory, run:

```bash
pnpm install
```

### 2.2 Local Development

**Prerequisite**

- Before you begin, check the version of `node` by running the command `node
--version`. According to "Minimum Runtime Requirements", **TypeScript** requires
`node` version 18.17.1 or later.

- This project was used as a package manager, `pnpm`
- Before starting, make sure you have `pnpm` installed

To start the pizza-shop, follow these steps:

1. **Run the Application**

Use the commands to run:

- Development environment

```bash
pnpm run dev
```

1.1. **Run tests**

```bash
pnpm run test
```
2. **Backend the application**

For this project, the pizza-api backend was used as a base:

- https://github.com/rocketseat-education/pizzashop-api


3. **Access the Application**

Once the server is running, open your preferred web browser and navigate to:

- [http://localhost:5173](http://localhost:5173)