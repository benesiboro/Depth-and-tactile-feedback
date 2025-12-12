# Depth-and-tactile-feedback
This repository contains the source code and dataset associated with the manuscript submitted to The Visual Computer, titled: “Enhancing Menu Interaction in Virtual Reality: The Impact of Depth Perception and Tactile Feedback.” The repository includes the complete experimental implementation, Unity project files, logging system, and analysis scripts used in the study. This resource is provided to promote transparency and reproducibility.
Readers are encouraged to cite the manuscript when using this code or dataset.

# Repository Structure
Assets/                    # Unity scenes, scripts, prefabs (menu interaction system)
Library                    # Unity package references                    
Logs/Packages/             # Raw experiment logs (MT, accuracy, timestamps)
Project Settings/          # Unity project configuration
UserSettings/
README.md                  # Documentation

# System Requirements
Unity : Unity 2021 LTS or later
XR Interaction Toolkit
Input System enabled

Hardware
Touchscreen display (real-tactile condition)
Sony TDG-BT500A Active 3D Glasses
3D TV and IR Emitter NVIDIA 3D
PC with GPU that supports stereoscopic rendering
Logitech Spotlight Presenter Remote

Statistic Software
1. SPSS (Version 26 or later)
Used for: Shapiro–Wilk test, RM-ANOVA, Greenhouse–Geisser corrections, Bonferroni post-hoc tests
2. Aligned Rank Transform (ART) Tool – Excel Version
Developed by Jacob O. Wobbrock et al. Website: https://depts.washington.edu/acelab/proj/art/index.html
Used when normality assumptions were violated.
