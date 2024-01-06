
const educations = {
    data: [
    {
        'title': 'Artificial Intelligence',
        'degree': 'Master 2',
        'university': 'Toulouse III - Paul Sabatier University, Toulouse, France',
        'duration': '09/2017 - 12/2020',
    },
    {
        'title': 'Software Engineering',
        'degree': 'Master 2',
        'university': 'Constantine II - Abdelhamid MEHRI University, Constantine, Algeria',
        'duration': '09/2015 - 07/2017',
    }
]
};

const work_experiences={
    data: [
    {
        title: "Artificial Intelligence Developer",
        company: "SolutionData Group",
        duration: "08/2021 – Present",
        location: "Toulouse, France",
        category: "CDI",
        missions: [
            "Creating an ML-based platform for analysing and extracting valuable insights from data.",
            "Developing Python backend components.",
            "Integrating generative AI in different parts of the developed platform.",
            "Promoting the adoption and implementation of the Scrum framework within the team."],
        skills: ["Python","Machine Learning","LLM","NLP","Flask","Docker","Scrum"]
    },
    {
        title: "Deep Learning intern",
        company: "Diota",
        duration: "06/2020 – 12/2020",
        location: "Toulouse, France",
        category: "Internship",
        missions: [
            "Establish state of the art of industrial commercial solutions based on Deep Learning for conformity control.",
            "Evaluate an OCR Deep Learning commercial solution on Diota images.",
            "Implement Siamese Neural Networks on public datasets : MNIST \& CIFAR10",
            "Create similarity dataset of based on real industrial images of Diota.",
            "Implement three levels of similarity estimation on Diota Dataset."],
        skills: ["Deep Learning","TensorFlow","Python","Matplotlib"]
    },
    {
        title: "Textual analysis for speaker recognition",
        company: "IRIT",
        duration: "10/2019 – 03/2020",
        category: "Supervised project",
        location: "Toulouse, France",
        missions: [
            "Clean the textual data of the AMI corpus.",
            "Perform 'Topic modeling' of the cleaned dataset using LDA.",
            "Classify the text of the cleaned dataset.",
            "Extract named entities using spaCy."
        ],
        skills: ["Python", "NLTK", "Scikit-learn", "spaCy"]
    }
]
};


const personal_experiences={
    data: [
        {
            "title": "Build Knowledge Graph Using LLM",
            "missions": [
                "Extract graph from article text using langchain and openai API.",
                "Show the extracted graph using Streamlit."
            ],
            "skills": ["LLM", "Langchain", "Streamlit"],
            "links": {
                "Demonstration": "https://buildknowledgegraphllm.streamlit.app/",
                "GitHub": "https://github.com/TaqiyEddine-B/BuildKnowledgeGraphLLM"
            },
            "duration": "12/2023 - Present",
            "description": "Personnel project"
        },
        {
            "title": "Chat with Documents using LlamaIndex and Streamlit",
            "missions": [
                "Read a document, divide it into vectors, and save them in the vector databases.",
                "Query vector databases to extract relevant information."
            ],
            "skills": ["LLM", "LlamaIndex", "Streamlit"],
            "links": {
                "Demonstration": "https://chatdocumentllm.streamlit.app/",
                "GitHub": "https://github.com/TaqiyEddine-B/ChatDocumentLLM"
            },
            "duration": "12/2023 - Present",
            "description": "Personnel project"
        },
        {
            "title": "BERT Kick-Starter Project",
            "missions": [
                "Get and perform data cleaning on the tweet dataset.",
                "Train a Naive Bayes Classifier and a fine-tuned BERT model.",
                "Evaluate the two models and compare the obtained results."
            ],
            "skills": ["NLP", "BERT", "PyTorch"],
            "links": {
                "GitHub": "https://github.com/TaqiyEddine-B/BERT-kick-starter-project"
            },
            "duration": "04/2020 - 04/2020",
            "description": "Personnel project"
        }


    ]
};

const publications = {
    data: [
        {
            "title": "HTE at ArAIEval Shared Task: Integrating Content Type Information in Binary Persuasive Technique Detection",
            "duration": "09/2023 - 10/2023",
            "additionalInfo": "Shared Task",
            "links": {
                "Paper": "https://aclanthology.org/2023.arabicnlp-1.46/",
                "Pdf": "https://aclanthology.org/2023.arabicnlp-1.46.pdf",
                "GitHub": "https://github.com/TaqiyEddine-B/Transformers-for-Propaganda-Detection"
            },

            "missions": [
                "Fine-tuning the MARBERT model for two tasks: identifying persuasive techniques in text and classifying text types.",
                "Leveraging the imbalance in the dataset using focal loss",
                "The system achieved the highest ranking on the leaderboard during testing."
            ],
            "skills": ["Transformers", "PyTorch"]
        }

    ]
};

export {work_experiences, educations,personal_experiences,publications};