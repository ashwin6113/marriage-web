# Changelog

All notable changes to the **Marriage Web** project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

---

## [1.0.0] - 2026-09-05

### Added
- **Bible Verses Section**: Added `BibleVersesSection.tsx` featuring scriptures:
  - *Ecclesiastes 3:11*: "He has made everything beautiful in its time"
  - *Mark 10:9*: "Therefore what God has joined together, let no one separate"
- **Celebration Banner Section**: Created `CelebrateBannerSection.tsx` displaying the custom floral welcome invitation banner (`public/images/celebrate_banner.jpg`).
- **Type Checking Command**: Added `"typecheck": "tsc --noEmit"` to `package.json` scripts for automated industrial type validation.
- **Changelog & Documentation**: Established `CHANGELOG.md` and updated developer instructions in `README.md`.

### Changed
- **Bride & Groom Details**: Customised branding, headers, metadata, monograms (**A & H**), and footer for **Apphia Mariam Mathew & Hemanth R S**.
- **Wedding Date & Countdown**: Updated wedding date to **September 28, 2026** across `HeroSection`, `CountdownSection`, and `WeddingFooter`.
- **Venue & Location**: Updated venue information to **Yahir Yahir Auditorium, TK Rd, Vallamkulam East, Thiruvalla, Eraviperoor, Kerala** with direct Google Maps integration.
- **SEO & Layout Metadata**: Updated page title to `"Apphia & Hemanth | Wedding 2026"` and enriched metadata description in `layout.tsx`.
- **Package Version**: Bumped project version to `1.0.0` in `package.json`.

### Removed
- **Unneeded Content Sections**: Removed `CoupleSection`, `StoryTimeline`, and `PhotoGallery` components to align with client requirements for a clean, minimalist single-page wedding website.
