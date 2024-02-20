const educations = {
  data: [
    {
      title: "Artificial Intelligence",
      degree: "Master 2",
      university: "Toulouse III - Paul Sabatier University",
      duration: "09/2017 - 12/2020",
      location: "Toulouse, France",
    },
    {
      title: "Software Engineering",
      degree: "Master 2",
      university: "Constantine II - Abdelhamid MEHRI University",
      duration: "09/2015 - 07/2017",
      location: "Constantine, Algeria",
    },
  ],
};

const work_experiences = {
  data: [
    {
      id: "sdg_ai",
      title: "Artificial Intelligence Developer",
      company: "SolutionData Group",
      duration: "08/2021 – Present",
      location: "Toulouse, France",
      category: "CDI",
      description:
        "Conceptualizing, developing, and packaging machine learning (ML) and Python-based backend projects",
      missions: [
        "Creating an ML-based platform for analysing and extracting valuable insights from data.",
        "Developing Proof of Concepts (POCs) for experimentation and rapid prototyping.",
        "Developing Python backend components.",
        "Integrating generative AI in different parts of the developed platform.",
        "Promoting the adoption and implementation of the Scrum framework within the team.",
      ],
      skills: [
        "Python",
        "Machine Learning",
        "LLM",
        "NLP",
        "Flask",
        "Docker",
        "Scrum",
      ],
    },
    {
      id: "diota_dl_intern",
      title: "Deep Learning intern",
      company: "Diota",
      duration: "06/2020 – 12/2020",
      location: "Toulouse, France",
      category: "Internship",
      description:
        "Implementation of Deep Learning solution (Siamese Neural Networks) to measure the similarity between images of an industrial environment",
      missions: [
        "Establish state of the art of industrial commercial solutions based on Deep Learning for conformity control.",
        "Evaluate an OCR Deep Learning commercial solution on Diota images.",
        "Implement Siamese Neural Networks on public datasets : MNIST & CIFAR10",
        "Create similarity dataset of based on real industrial images of Diota.",
        "Implement three levels of similarity estimation on Diota Dataset.",
      ],
      skills: ["Deep Learning", "TensorFlow", "Python", "Matplotlib"],
    },
    {
      id: "irit_ami",
      title: "Textual analysis for speaker recognition",
      company: "IRIT",
      duration: "10/2019 – 03/2020",
      category: "Supervised project",
      location: "Toulouse, France",
      description:
        "Development of a pipeline for the textual data of the AMI corpus in order to merge them with audio and video data in order to recognize speakers in interaction situation.",
      missions: [
        "Clean the textual data of the AMI corpus.",
        "Perform 'Topic modeling' of the cleaned dataset using LDA.",
        "Classify the text of the cleaned dataset.",
        "Extract named entities using spaCy.",
      ],
      skills: ["Python", "NLTK", "Scikit-learn", "spaCy"],
    },
    {
      id: "irit_audio",
      title: "Audio classification using Deep Learning",
      company: "IRIT",
      duration: "01/2018 – 04/2018",
      location: "Toulouse, France",
      category: "Supervised project",
      description:
        "Implementation of Deep Learning solution to detect certain audio characteristics like the gender, the age and the accent of the user from certain spoken words.",
      missions: [
        "Prepare 'Common Voice' dataset",
        "Preprocess the data",
        "Propose and validate a CNN model",
        "Evaluate the results",
      ],
      skills: ["CNN", "Pandas", "Keras", "Python"],
    },
  ],
};

const personal_experiences = {
  data: [
    {
      id: "llm_knowledge_graph",
      title: "Build Knowledge Graph Using LLM",
      missions: [
        "Extract graph from article text using langchain and openai API.",
        "Show the extracted graph using Streamlit.",
      ],
      skills: ["LLM", "Langchain", "Streamlit"],
      links: {
        Demonstration: "https://buildknowledgegraphllm.streamlit.app/",
        GitHub: "https://github.com/TaqiyEddine-B/BuildKnowledgeGraphLLM",
      },
      duration: "12/2023 - Present"
    },
    {
      id: "chat_document_llm",
      title: "Development of a conversational chatbot based in RAG",
      description :"Develop a conversational chatbot that uses an LLM model to provide users with precise answers from a specified set of documents.",
      missions: [
        "Uses LlamaIndex to load and index data and create a chat engine that will retrieve context from that data to respond to each user query.",
        "Develop a simple user interface in Streamlit to display user queries as well as model responses.",
      ],
      skills: ["LLM","RAG (Retrieval-Augmented Generation)","LlamaIndex", "Streamlit"],
      links: {
        Demonstration: "https://chatdocumentllm.streamlit.app/",
        GitHub: "https://github.com/TaqiyEddine-B/ChatDocumentLLM",
      },
      duration: "12/2023 - Present"
    },
    {
      id: "bert_kick_starter_project",
      title: "BERT Kick-Starter Project",
      missions: [
        "Get and perform data cleaning on the tweet dataset.",
        "Train a Naive Bayes Classifier and a fine-tuned BERT model.",
        "Evaluate the two models and compare the obtained results.",
      ],
      skills: ["NLP", "BERT", "PyTorch"],
      links: {
        GitHub: "https://github.com/TaqiyEddine-B/BERT-kick-starter-project",
      },
      duration: "04/2020 - 04/2020"
    },
  ],
};

const publications = {
  data: [
    {
      title:
        "HTE at ArAIEval Shared Task: Integrating Content Type Information in Binary Persuasive Technique Detection",
      duration: "09/2023 - 10/2023",
      additionalInfo: "Shared Task",
      links: {
        Paper: "https://aclanthology.org/2023.arabicnlp-1.46/",
        Pdf: "https://aclanthology.org/2023.arabicnlp-1.46.pdf",
        GitHub:
          "https://github.com/TaqiyEddine-B/Transformers-for-Propaganda-Detection",
      },

      missions: [
        "Fine-tuning the MARBERT model for two tasks: identifying persuasive techniques in text and classifying text types.",
        "Leveraging the imbalance in the dataset using focal loss",
        "The system achieved the highest ranking on the leaderboard during testing.",
      ],
      skills: ["Transformers", "PyTorch"],
    },
  ],
};

const blog = {
  data:[
    {
      id: "llm_knowledge_graph",
    //  url: "https://raw.githubusercontent.com/TaqiyEddine-B/BuildKnowledgeGraphLLM/main/README.md",
    url:'https://github.com/TaqiyEddine-B/BuildKnowledgeGraphLLM/blob/main/README.md'
    }
  ]
}

export { work_experiences, educations, personal_experiences, publications ,blog};
