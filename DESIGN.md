---
version: alpha
name: Vidriería Bonilla
description: Workshop precision in daylight. Cool paper white, the royal blue of the shield logo, aluminium linework.
colors:
  primary: '#1447A6'
  primary-hover: '#0F3A8A'
  on-primary: '#FFFFFF'
  secondary: '#0A2350'
  on-secondary: '#F2F6FB'
  on-secondary-muted: '#B7C6DE'
  neutral: '#F5F7F9'
  surface: '#F5F7F9'
  surface-raised: '#FFFFFF'
  surface-glass: '#E6EDF3'
  on-surface: '#0E1A2B'
  on-surface-muted: '#3F4D63'
  outline: '#C9D3DD'
  linework: '#6E7C8F'
  tertiary: '#C2702E'
  tertiary-ink: '#A65A22'
  tertiary-on-deep: '#E0A06A'
  tertiary-soft: '#F6E7D9'
  tertiary-strong: '#8A4A1B'
  scene-wall: '#E9E6DF'
  scene-sill: '#D4D0C6'
  error: '#B42318'
  success: '#1D7A45'
typography:
  headline-display:
    fontFamily: Archivo
    fontSize: 68px
    fontWeight: '780'
    lineHeight: 0.98
    letterSpacing: -0.03em
    fontVariation: "'wdth' 118"
  headline-lg:
    fontFamily: Archivo
    fontSize: 44px
    fontWeight: '720'
    lineHeight: 1.05
    letterSpacing: -0.025em
    fontVariation: "'wdth' 114"
  headline-md:
    fontFamily: Archivo
    fontSize: 26px
    fontWeight: '650'
    lineHeight: 1.2
    letterSpacing: -0.015em
    fontVariation: "'wdth' 108"
  body-xl:
    fontFamily: Archivo
    fontSize: 22px
    fontWeight: '400'
    lineHeight: 1.5
  body-lg:
    fontFamily: Archivo
    fontSize: 19px
    fontWeight: '400'
    lineHeight: 1.55
  body-md:
    fontFamily: Archivo
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 1.6
  label-md:
    fontFamily: Archivo
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 1.3
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Archivo
    fontSize: 13px
    fontWeight: '560'
    lineHeight: 1.3
    letterSpacing: 0.02em
    fontFeature: "'tnum' 1"
rounded:
  xs: 2px
  sm: 6px
  lg: 14px
  full: 999px
spacing:
  '1': 4px
  '2': 8px
  '3': 12px
  '4': 16px
  '5': 24px
  '6': 32px
  '7': 48px
  '8': 72px
  '9': 112px
components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.sm}'
    padding: 14px 22px
    height: 48px
  button-primary-hover:
    backgroundColor: '{colors.primary-hover}'
    textColor: '{colors.on-primary}'
  button-secondary:
    backgroundColor: '{colors.surface-raised}'
    textColor: '{colors.on-surface}'
    typography: '{typography.label-md}'
    rounded: '{rounded.sm}'
    padding: 14px 22px
    height: 48px
  section-deep:
    backgroundColor: '{colors.secondary}'
    textColor: '{colors.on-secondary}'
  section-deep-muted:
    backgroundColor: '{colors.secondary}'
    textColor: '{colors.on-secondary-muted}'
  page:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.on-surface}'
  page-muted:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.on-surface-muted}'
  pane:
    backgroundColor: '{colors.surface-glass}'
    textColor: '{colors.on-surface}'
    rounded: '{rounded.lg}'
  field:
    backgroundColor: '{colors.surface-raised}'
    textColor: '{colors.on-surface}'
    rounded: '{rounded.sm}'
    height: 48px
  field-error:
    backgroundColor: '{colors.surface-raised}'
    textColor: '{colors.error}'
  notice-success:
    backgroundColor: '{colors.surface-raised}'
    textColor: '{colors.success}'
  accent-text:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.tertiary-ink}"
  accent-text-on-deep:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.tertiary-on-deep}"
  statement:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.body-xl}"
  scene:
    backgroundColor: "{colors.scene-wall}"
    textColor: "{colors.on-surface}"
  scene-sill:
    backgroundColor: "{colors.scene-sill}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xs}"
  accent-chip:
    backgroundColor: "{colors.tertiary-soft}"
    textColor: "{colors.tertiary-strong}"
    rounded: "{rounded.full}"
  neutral-swatch:
    backgroundColor: '{colors.neutral}'
    textColor: '{colors.on-surface}'
---

## Overview

A glass and aluminium workshop seen in daylight. The page borrows from the shop's own world: aluminium profiles,
panes of glass, and the dimension lines of a fabrication drawing. Visitors mostly use phones outdoors, so the page
is light, high contrast and calm. The royal blue and silver of the shield logo carry the brand; the photos of real
installed windows carry the proof.

Mode: Persuade for the landing, Read for legal pages.

## Colors

Committed strategy. Cool paper white (`surface`) holds most of the page. Deep blue (`secondary`) takes over whole
bands (about, footer) so the brand colour covers roughly a third of the scroll. `primary` stays the only colour for
actions. `tertiary` (copper) is the warm counterpoint, taken from bronze glass and wood-tone frames: accent
rules, the process line, selection rings, product labels and the hero dimension label. Small copper text uses
`tertiary-ink` on light surfaces and `tertiary-on-deep` on the deep band. `linework` draws elevations and dimension lines and never carries text. No cream, no beige,
no gradients on text, no glows.

## Typography

One family, Archivo, self-hosted as a variable font with weight and width axes. Headlines run wide (wdth 108 to 118)
and heavy, like lettering on a shop sign; body copy runs at normal width. Emphasis uses weight, never a second
family. Measurements use tabular figures of the same family. Tracking never tighter than -0.03em. Body text never
below 16px, measure 65 to 72ch.

## Layout

A 12-column grid, max 1240px, 16px gutter on phones and 32px on desktop. Section rhythm is set by `spacing.8` and
`spacing.9`; more space above headings than below. Each section uses a different composition: asymmetric split
hero, indexed service list with a live preview, editorial photo mosaic, full-bleed deep band, two-column FAQ,
form beside contact channels.

## Elevation & Depth

Flat by default. Depth comes from layering panes: a photo sits in an aluminium-toned frame (`outline` 1px) with a
thin inner reflection line. One soft offset shadow (`0 18px 40px -24px`) is allowed on the hero frame only.

## Shapes

Two radii. `rounded.sm` (6px) for buttons, fields and small controls. `rounded.lg` (14px) for photo frames and panes.
Pills only for the language switch.

## Components

Primary button: solid royal blue, white label, 48px tall. Secondary button: white with a 1px outline. Fields:
white, 1px outline, label above, error text below in `error` with an icon. Drawn elevations: 1.5px `linework`
strokes, dimension lines with ticks and a label in `label-sm`.

## Do's and Don'ts

- Do use the business's own photos; draw an elevation when there is no photo.
- Do keep one authored motion moment: the sliding pane in the hero.
- Don't add eyebrow labels, section numbers, identical card grids or glassmorphism.
- Don't use em dashes or marketing superlatives in copy.
- Don't animate images on hover; give the container the feedback.
