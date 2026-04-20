---
seo:
  title: Laravel REST API Object Mapper
  description: An ORM-like developer experience for Laravel REST APIs in TypeScript/Nuxt
---

## ::u-page-hero{class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950"}

## orientation: horizontal

#top
:hero-background

#title
Build [type-safe REST clients]{.text-primary} with an ORM-like experience.

#description
Laravel REST API Object Mapper brings decorator-based models, an identity map, and expressive query builders to your TypeScript/Nuxt applications communicating with Laravel REST APIs.

#links
:::u-button

---

to: /getting-started/installation
size: xl
trailing-icon: i-lucide-arrow-right

---

Get Started
:::

:::u-button

---

icon: i-simple-icons-github
color: neutral
variant: outline
size: xl
to: https://github.com/lomkit/laravel-rest-api
target: \_blank

---

View on GitHub
:::

#default
:::prose-pre

---

code: |
@Resource('users')
class User extends Model {
@Key() @Field() id!: number
@Field() firstname!: string
@Field() lastname!: string

      posts = HasMany(() => Post, 'posts')
    }

    const user = await User.query()
      .where('firstname', 'like', 'Eli%')
      .include('posts')
      .findByKey(1)

filename: models/User.ts

---

```ts [models/User.ts]
@Resource("users")
class User extends Model {
  @Key() @Field() id!: number;
  @Field() firstname!: string;
  @Field() lastname!: string;

  posts = HasMany(() => Post, "posts");
}

const user = await User.query()
  .where("firstname", "like", "Eli%")
  .include("posts")
  .findByKey(1);
```

:::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
Why an ORM-like Architecture?

#features
:::u-page-feature

---

icon: i-lucide-database

---

#title
Familiar ORM patterns

#description
Traditional ORMs abstract SQL databases. This module applies the same idea to REST resources: models communicate with an HTTP API instead of a DB. The transport changes (SQL → HTTP), but the developer model stays familiar. Business logic stays in models; network details remain an infrastructure concern.
:::

:::u-page-feature

---

icon: i-lucide-git-branch

---

#title
Type-safe relations

#description
Define relations as typed property initializers with `HasMany`, `BelongsTo`, `HasOne`, and `BelongsToMany`. No decorator needed — relation builders self-register their metadata at bootstrap time, giving you full TypeScript autocomplete.
:::

:::u-page-feature

---

icon: i-lucide-brain

---

#title
Identity Map

#description
One primary key maps to one instance in memory. Mutations are visible everywhere in your app, and hydration automatically reuses existing instances. No duplicate objects, no stale data, no synchronization headaches.
:::

:::u-page-feature

---

icon: i-lucide-code-2

---

#title
Expressive Query Builder

#description
Chain filters, sorts, includes, and pagination with a fluent API. Write queries that read like natural language: `User.query().where('firstname', 'like', 'Eli%').include('posts').orderBy('id').get()`.
:::

:::u-page-feature

---

icon: i-lucide-layers-3

---

#title
Decorator-based models

#description
Use `@Resource`, `@Field`, and `@Key` decorators to define your domain models. Metadata is collected at runtime to drive hydration, serialization, and API communication. Clean, declarative, and framework-aware.
:::

:::u-page-feature

---

icon: i-lucide-git-commit

---

#title
Dirty tracking & deferred mutations

#description
Field changes are tracked in `_changes`, relation mutations (`attach`, `detach`, `sync`, `toggle`) are deferred, and everything is committed atomically on `save()`. Roll back on failure, commit on success.
:::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
Key Features

#features
:::u-page-feature

---

icon: i-lucide-boxes

---

#title
Decorator-based models

#description
Define your domain models with TypeScript decorators. `@Resource` configures the API endpoint, `@Field` marks hydrated properties, and `@Key` identifies primary keys. Metadata drives serialization, hydration, and API communication.
:::

:::u-page-feature

---

icon: i-lucide-network

---

#title
Relation builders

#description
Declare `HasMany`, `BelongsTo`, `HasOne`, and `BelongsToMany` relations as property initializers. Chain queries on relations, eager-load nested data, and mutate relations with `attach`, `detach`, `sync`, `toggle`, and `create` operations.
:::

:::u-page-feature

---

icon: i-lucide-test-tube

---

#title
Fake mode for testing

#description
Identical API, zero network calls. Use `User.fake().findByKey(1)` to query in-memory data during development or testing. Fast, deterministic, and perfect for frontend work without a live backend.
:::
::

::u-page-section{class="dark:bg-gradient-to-b from-neutral-950 to-neutral-900"}
:::u-page-c-t-a

---

links: - label: Get started
to: '/getting-started/installation'
trailingIcon: i-lucide-arrow-right - label: View Roadmap
variant: outline
to: '/roadmap'
title: Ready to build type-safe REST clients?
description: Get started with Laravel REST API Object Mapper and bring ORM-like patterns to your REST API integration.
class: dark:bg-neutral-950

---

:stars-bg
:::
::
