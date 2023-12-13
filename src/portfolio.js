
const educations = {
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
                "Demonstration": "https://taqiyeddine-b-buildknowledgegraphllm-main-qcgtql.streamlit.app/",
                "GitHub": "https://github.com/TaqiyEddine-B/BuildKnowledgeGraphLLM"
            },
            "duration": "12/2023 - 12/2023",
            "description": "Personnel project"
        },
        {
            "title": "Chat with Documents using Langchain and Streamlit",
            "missions": [
                "Read a document, divide it into vectors, and save them in the vector databases (chroma and pinecone).",
                "Query vector databases to extract relevant information."
            ],
            "skills": ["LLM", "Langchain", "Streamlit"],
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

export {work_experiences, educations,personal_experiences};