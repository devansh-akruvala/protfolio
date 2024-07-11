interface Project {
    name : string,
    tags : string[],
    description:string,
    links:{
        url : string,
        linkName:string,
        icon:any
    }[]
}

export const projects:Project[] = [
    {
        name: "CodeSync", tags: ["Java", "Spring Boot", "RESTful API", "Spring Security", "Junit", "React", "Redux", "MySQL", "Maven"
        ],
        description: "A web app for code review, enhancing user collaboration and feedback quality, by enabling submission of pull requests and receiving feedback via comments and videos",
        links: [{
            url: "https://github.com/devansh-akruvala/Assignment-submission-app-backend",
            linkName: "GitHub",
            icon: undefined
        }]
    },
    {
        name: "A.I.ducation-Analytics", tags: ["Python", "PyTorch", "numpy", "matplotlib", "cv2"],
        description: "A CNN model for categorizing student engagement states, achieving 70\% accuracy via k-fold cross-validation, by managing diverse datasets, applying preprocessing, and conducting bias analysis on age and gender for fairness",
        links: [{
            url: "https://github.com/devansh-akruvala/A.I.ducation-Analytics",
            linkName: "GitHub",
            icon: undefined
        }]
    },
    
    {
        name: "Smart Entrance System", tags: ["Python", "Django", "SQLite3", "Pyfirmata", "Bootstrap"
        ],
        description: "An Arduino and web solution for event security and management, reducing entry time by 43\%, by implementing dynamic form links for registration and QR code passes. Used by over 2000 users at university workshops and events",
        links: [{
            url: "https://github.com/devansh-akruvala/Smart-Entrance-System",
            linkName: "GitHub",
            icon: undefined
        }]
    },
    
    {
        name: "Warzone", tags: ["Java", "Junit", "Maven", "CI/CD GitHub Actions"],
        description: "Developed a RISK Warzone game using Java, enabling territory attacks with custom battle logic and random probability, by using design patterns like Strategy, Observer, State, Command, and Adapter to write scalable code",
        links: [{
            url: "https://github.com/devansh-akruvala/SOEN_6441_FALL_23_RISK_GAME",
            linkName: "GitHub",
            icon: undefined
        }]
    },
    
    {
        name: "load balancer", tags: ["Go",
        ],
        description: "Developed a load balancer in Go, optimizing traffic distribution, by using algorithms such as round robin, iphash, and weighted response time",
        links: [{
            url: "https://github.com/devansh-akruvala/load-balancer-using-go",
            linkName: "GitHub",
            icon: undefined
        }]
    },
    
    {
        name: "My Notebook", tags: ["Node.js", "React.js", "Express.js", "MongoDB", "Bootstrap", "Jest"
        ],
        description: "Developed a web app for creating and storing notes, enabling synchronization across multiple devices, providing rich text editing, and offering secure storage, through a responsive design and real-time database updates",
        links: [{
            url: "https://github.com/devansh-akruvala/mynotebook",
            linkName: "GitHub",
            icon: undefined
        },]
    },
    
    {
        name: "Doc Buddy", tags: ["Dart", "Flutter", "SQLite"
        ],
        description: "A mobile app facilitating PDF creation from physical documents with cropping, rotation, and image adjustments, integrated advanced PDF management, editing, and secure digital vault with biometric authentication",
        links: [{
            url: "https://github.com/devansh-akruvala/Doc_Buddy",
            linkName: "GitHub",
            icon: undefined
        },
    ]
    },
    {
        name: "Groupie", tags: ["Flutter", "Dart", "Firebase Authentication", "Cloud Firestore"
        ],
        description: "A mobile app facilitating PDF creation from physical documents with cropping, rotation, and image adjustments, integrated advanced PDF management, editing, and secure digital vault with biometric authentication",
        links: [{
            url: "https://github.com/devansh-akruvala/chat_app_flutter",
            linkName: "GitHub",
            icon: undefined
        },
    ]
    },
    {
        name: "Virtual Blackboard", tags: ["Python", "OpenCV", "numpy", "Image Processing"],
        description: "Tool allowing users to write on a computer screen via webcam and a pen-like colored object. Leveraged contour detection and a similarity of triangles to improve accuracy and usability",
        links: [{
            url: "https://github.com/devansh-akruvala/Virtual-Blackboard-using-Image-Processing",
            linkName: "GitHub",
            icon: undefined
        },
    ]
    },
    {
        name: "Smart Parking System", tags: ["Python", "OpenCV", "OCR", "Pandas", "scikit-image"],
        description: "An end-to-end parking solution employing ML models for empty spot detection, Haar Cascade for license plate recognition, Tesseract OCR for text extraction, and face recognition for driver authentication",
        links: [{
            url: "https://github.com/devansh-akruvala/Smart-Parking-System",
            linkName: "GitHub",
            icon: undefined
        },
    ]
    },
    

]