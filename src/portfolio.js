
const education = {
    data: [
    {
        'title': 'Master of Science in Artificial Intelligence',
        'university': 'University of Toulouse, France',
        'duration': '2019 -- 2021',
    },
    {
        'title': 'Master in Software Engineering',
        'university': 'University of Constantine, Algeria',
        'duration': '2019 -- 2021',
    }
]
};

const work_experiences={
    data: [
    {
        title: "Artificial Intelligence Developer",
        missions: [
            "Creating an ML-based platform for analysing and extracting valuable insights from data.",
            "Developing Python backend components.",
            "Integrating generative AI in different parts of the developed platform.",
            "Promoting the adoption and implementation of the Scrum framework within the team."],
        skills: ["Python","Machine Learning","LLM","NLP","Flask","Docker","Scrum"]
    },
    {
        title: "Deep Learning intern",
        missions: [
            "Establish state of the art of industrial commercial solutions based on Deep Learning for conformity control.",
            "Evaluate an OCR Deep Learning commercial solution on Diota images.",
            "Implement Siamese Neural Networks on public datasets : MNIST \& CIFAR10",
        "Create similarity dataset of based on real industrial images of Diota.",
    "Implement three levels of similarity estimation on Diota Dataset."],
        skills: ["Deep Learning","TensorFlow","Python","Matplotlib"]
    },
    {
        "title": "Textual analysis for speaker recognition",
        "duration": "10/2019 -- 03/2020",
        "category": "Supervised project",
        "location": "IRIT, Toulouse, France",
        "missions": [
            "Clean the textual data of the AMI corpus.",
            "Perform 'Topic modeling' of the cleaned dataset using LDA.",
            "Classify the text of the cleaned dataset.",
            "Extract named entities using spaCy."
        ],
        "skills": ["Python", "NLTK", "Scikit-learn", "spaCy"]
    }
]
};

export {work_experiences, education};