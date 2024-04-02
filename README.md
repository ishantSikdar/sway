# Introduction
Sway is a cross-platform mobile & web app designed to streamline access to educational content from YouTube. Users can search for topics that they want to study, and the app will provide curated subtopics with relevant YouTube videos.

## Features
- **Search Playlists:** Users can search for topics they want to study, generating subtopics with relevant YouTube videos.
- **Courses:** Users can release their own courses, free or paid, and review & rate each course video.
- **Focus Study Timer:** Introducing a focus timer for better productivity and longer study focus, disabling notifications.
- **Educational Shorts:** Users can scroll educational content instead of Instagram Reels or YouTube Shorts.
- **Communities:** Users can create group chats consisting of text, voice, and video channels to discuss and solve problems together.

_NOTE: The last 2 features are intended to attract users and may take longer to develop. The first 3 features constitute the prototype & base app._

## Feature Details and Functionalities

### Search Playlist (Flagship feature) – No Login Required
Designed for Users, especially for college students looking for subject resources.

1. Users can search for a subject or topic they want to study.
2. Our system generates subtopics based on the search term.
3. YouTube API fetches the most suitable lecture video for the chosen subtopic.

### Featured Courses – Login Required
For users who want to feature their own courses, paid or free. Paid courses must offer 1 or 2 free lectures as a trial.

### Focus Study – Login Required
To increase productivity and focus, introducing a study timer.
1. Users can start and stop the timer when studying.
2. Breaks can be taken by pausing the timer with set time limits.
3. Daily reports rate productivity based on study and break time.
4. App disables mobile notifications when the timer is on.
5. Daily reports can be shared among communities for competition.

_Reference from FLIP Study App: [FLIP Study – Google Play](https://play.google.com/store/apps/details?id=com.flip.study&hl=en)_

## Additional Features  - Not covered in Prototype
- **Education Shorts:** Users can scroll educational content, filtered by AI.
- **Communities:** Users can create group chats for live interaction and support.

## Docs
- **YouTube API:** [YouTube Data API](https://developers.google.com/youtube/v3)
- **Web Page structure:** [Page UI - Excalidraw](https://excalidraw.com/#json=qI6iNGFKWuKAXcL2jxqpe,-ZJ86Z3Mq9ZS_uEV1X5yHg)
