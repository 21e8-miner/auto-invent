# 🧠 Auto-Invent: Product Idea Engine (v1.0 Spec)

## 🚀 Core Value Proposition
Turn a photo or description of a product into concrete, actionable innovation output:
- Better variants
- Cheaper manufacturing routes
- Patentability risk assessment
- Visual redesign concepts

## 🎯 User Types
1. **Solo inventors / makers**
2. **Small hardware startups**
3. **Product designers**
4. **Patent attorneys (Pro tier)**

## 📱 App Architecture (React Native + Expo)

### Tech Stack
- **Frontend:** React Native (Expo)
- **Navigation:** React Navigation
- **State:** Zustand
- **Camera/Image:** Expo Camera / Image Picker
- **Network:** Axios
- **Styling:** StyleSheet (Vanilla RN for strict control)

### Backend (Future Phase)
- **API:** Node.js/Express or Python/FastAPI
- **AI:** OpenAI GPT-4o (Vision + Text) & DALL-E 3
- **Storage:** S3-compatible

---

## 🧭 Core Flows & Screens

### 1. Onboarding (`OnboardingScreen`)
- "Turn any product into a better product."
- "Snap a photo. Get improvements, cost cuts, and patent-ready variants."
- **Actions:** [Continue Free], [Restore Purchase]

### 2. Home / Dashboard (`HomeScreen`)
- **Header:** "Your Projects"
- **Actions:** [New from Camera], [New from Photos], [Idea Text]
- **List:** Thumbnails of previous analyses with status tags.

### 3. Capture / Input (`CaptureScreen`)
- **Modes:** [Photo] | [Describe]
- **Photo:** Camera preview, shutter, retake.
- **Describe:** Text prompts ("What is it?", "Who for?", "Avoid?").

### 4. Running Analysis (`ProcessingScreen`)
- Progress bars: "Decomposing functions...", "Identifying failure modes..."
- Educational tips while loading.

### 5. Innovation Report (`ReportScreen`)
- **Summary Card:** 2-3 highlights.
- **Sections (Accordion):**
  - [Functions & Constraints]
  - [Weak Points / Failures]
  - [Improvement Ideas] (Difficulty/Risk ratings)
  - [Cost Optimization]
  - [Patent Risk (Heuristic)]
  - [Concept Variants] (DALL-E Visuals)
- **Actions:** [Export PDF], [Share]

### 6. Paywall (`ProScreen`)
- Free: 3/mo, Watermarked.
- Pro: 30/mo, Clean exports, Manufacturing intel.

---

## 🛠 Project Structure

```
/src
  /assets          # Images, fonts
  /components      # Reusable UI (Buttons, Cards, Inputs)
  /constants       # Colors, Typography, Layout
  /screens         # Main views (Home, Capture, Report)
  /navigation      # Stack/Tab navigators
  /store           # Zustand state management
  /services        # API calls (Mocked for Phase 1)
  /utils           # Helpers
```

## 📅 Roadmap

- **Phase 1 (Current):** UI Prototype with Local Mock Data.
- **Phase 2:** Connect to Real OpenAI Backend.
- **Phase 3:** Payments & PDF Export.
