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
Unity : Unity 2019 LTS or later
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

# Running the Experiment
1. Clone this repository:
   git clone https://github.com/benesiboro/Depth-and-tactile-feedback.git

2. Open the project in Unity 2019 LTS or later
3. Load the experiment scene, we divided into 3 condition level : easy, medium, hard based ont Index difficulty level. Each of them has 3 types, you can choose one for each condition experiment.
   Example for easy level choose : Asset/scene/1_easy.unity
4. Set up experiment based on experimental design
   a. Environment (real vs. stereoscopic VR)
   b. Depth : 35 cm and 45 cm
   c. Difficulty : easy, medium, hard.
5. Press Plat to start the experiment
6. Log file will be automatically saved in the Logs

# Data Processing and Statistical Analysis
1. Dataset
Each log file contains: Movement time per trial, accuracy, trial timestamps, condition variables (environment, depth, difficulty)
2. Analysis Workflow
   a. Normality Testing (SPSS) : Shapiro–Wilk test applied to MT, accuracy, and IP.
   b. Aligned Rank Transformation (ART) : Conducted using the Excel-based ART tool by Jacob O. Wobbrock. Produces aligned and ranked values for factorial designs. Applied when Shapiro–Wilk indicated non-normal distributions.
   c. Repeated Measures ANOVA (SPSS) : main factors, interaction within factors. ART-transformed values used as input. Greenhouse–Geisser applied when sphericity was violated
   d. Post-hoc Testing (SPSS): Bonferroni-adjusted pairwise comparisons for significant effects. This workflow replicates all statistical results presented in the manuscript.

# Zenodo DOI
https://doi.org/10.5281/zenodo.17905722

# Citation
Lin et al., (2025). Enhancing Menu Interaction in Virtual Reality: The Impact of Depth Perception and Tactile Feedback.The Visual Computer.

# Contact
For questions or collaboration inquiries, please contact: getrudiscintya@gmail.com
   
