---
seo:
  title: Laravel REST API Object Mapper
  description: An ORM-like developer experience for Laravel REST APIs in TypeScript/Nuxt
---

::u-page-hero{class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950"}
---
orientation: horizontal
---
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
  target: _blank
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
  [Contenu à remplir]
  :::

  :::u-page-feature
  ---
  icon: i-lucide-git-branch
  ---
  #title
  Type-safe relations

  #description
  [Contenu à remplir]
  :::

  :::u-page-feature
  ---
  icon: i-lucide-brain
  ---
  #title
  Identity Map

  #description
  [Contenu à remplir]
  :::

  :::u-page-feature
  ---
  icon: i-lucide-code-2
  ---
  #title
  Expressive Query Builder

  #description
  [Contenu à remplir]
  :::

  :::u-page-feature
  ---
  icon: i-lucide-layers-3
  ---
  #title
  Decorator-based models

  #description
  [Contenu à remplir]
  :::

  :::u-page-feature
  ---
  icon: i-lucide-git-commit
  ---
  #title
  Dirty tracking & deferred mutations

  #description
  [Contenu à remplir]
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
  [Contenu à remplir]
  :::

  :::u-page-feature
  ---
  icon: i-lucide-network
  ---
  #title
  Relation builders

  #description
  [Contenu à remplir]
  :::

  :::u-page-feature
  ---
  icon: i-lucide-test-tube
  ---
  #title
  Fake mode for testing

  #description
  [Contenu à remplir]
  :::
::

::u-page-section{class="dark:bg-gradient-to-b from-neutral-950 to-neutral-900"}
  :::u-page-c-t-a
  ---
  links:
    - label: Get started
      to: '/getting-started/installation'
      trailingIcon: i-lucide-arrow-right
    - label: View Roadmap
      variant: outline
      to: '/roadmap'
  title: Ready to build type-safe REST clients?
  description: Get started with Laravel REST API Object Mapper and bring ORM-like patterns to your REST API integration.
  class: dark:bg-neutral-950
  ---

  :stars-bg
  :::
::
