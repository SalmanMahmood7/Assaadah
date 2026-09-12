import Head from "next/head";
import CourseDetailLayout from "../../components/CourseDetailLayout";
import { FaCode, FaChalkboardTeacher, FaLayerGroup, FaListOl, FaClock } from "react-icons/fa";

const GUESS_CODE = `secret_number = 7
attempts = 0
while True:
    guess = int(input("Guess (1-20): "))
    attempts += 1
    if guess == secret_number:
        print(f"Correct in {attempts} attempts!")
        break
    print("Too high!" if guess > secret_number else "Too low!")`;

const phases = [
  {
    title: "Python Foundations",
    range: "Days 1–12",
    summary: "Core language fundamentals, from variables and loops to a full CLI capstone app.",
    items: [
      { no: 1, title: "Environment Setup & Python Basics", goal: "Install VS Code, Python, and configure the local development environment and terminal workflow.", bullets: ["What Python is and how the interpreter executes code", "Setting up VS Code extensions (Python, Pylance, GitLens)", "Running scripts via terminal (python main.py)"], build: "Write your first interactive greeting script that captures user input and prints a personalized welcome message." },
      { no: 2, title: "Variables, Data Types & Basic I/O", goal: "Master variables, strings, integers, floats, booleans, and type casting.", bullets: ["Variable assignment and naming conventions (snake_case)", "Primitive data types and type conversion (int(), str(), float())", "Using input() and formatted f-strings"], build: 'Build a "Tip Calculator & Splitter" that calculates individual shares based on bill total and tip percentage.' },
      { no: 3, title: "Conditionals (if, elif, else)", goal: "Implement decision-making logic in Python scripts.", bullets: ["Comparison operators (==, !=, <, >, <=, >=)", "Logical operators (and, or, not)", "Branching execution flow with if, elif, and else"], build: 'Build an "Interactive Ticket Pricing & Discount System" based on user age and membership status.' },
      { no: 4, title: "Loops & Repeated Execution", goal: "Master while loops to keep programs running dynamically.", bullets: ["while loops vs for loops", "Loop counters and state management (attempts += 1)", "Loop control statements (break, continue)"], build: "CLI Number Guessing Game with high/low feedback and attempt tracking.", code: GUESS_CODE },
      { no: 5, title: "For Loops & Iterables", goal: "Iterate over sequences and collections using for loops and range().", bullets: ["Iterating through lists and strings", "Using range(start, stop, step)", "Accumulator patterns"], build: "Console Task Manager that prints formatted task checklists and iterates through pending items." },
      { no: 6, title: "Functions & Modular Code", goal: "Encapsulate reusable logic into custom functions with parameters and return values.", bullets: ["Defining functions with def", "Passing positional and keyword arguments", "Using return values vs printing"], build: "Modular Calculator App with dedicated functions for add, subtract, multiply, and divide." },
      { no: 7, title: "Lists & Basic Data Management", goal: "Store, manipulate, and query ordered collections of data.", bullets: ["List creation, indexing, and slicing", "Common methods: append(), insert(), remove(), pop(), sort()"], build: "Dynamic Shopping Cart application allowing users to add, remove, and view items." },
      { no: 8, title: "Dictionaries & Key-Value Storage", goal: "Store structured data using key-value pairs.", bullets: ["Creating dictionaries and accessing values by keys", "Methods: .keys(), .values(), .items(), .get()"], build: "Student Grade Management System mapping student names to exam scores and subjects." },
      { no: 9, title: "Tuples & Sets", goal: "Understand immutable sequences (tuples) and unique collections (sets).", bullets: ["Tuples for fixed records and multi-value returns", "Sets for eliminating duplicates and performing set math (union, intersection)"], build: "Unique Tag Extractor for blog posts or user profiles using set operations." },
      { no: 10, title: "Error Handling (try/except)", goal: "Prevent application crashes with robust exception handling.", bullets: ["Common exceptions (ValueError, TypeError, ZeroDivisionError, FileNotFoundError)", "Using try, except, else, and finally"], build: "Safe Division and Input Parser that gracefully recovers from invalid user input." },
      { no: 11, title: "File Handling (Reading/Writing Text Files)", goal: "Persist data to local text and CSV files.", bullets: ["Using open(), read(), write(), and close()", "Context managers (with open(...) as f:)"], build: "Persistent Journal App that appends daily reflections to a local journal.txt file." },
      { no: 12, title: "Mini-Project 1: CLI Note-Taking App", goal: "Combine functions, file handling, loops, and lists into a complete application.", bullets: ["Modular application design", "Loading state from disk on startup and saving on exit"], build: "Fully functional CLI Note-Taking App with add, view, search, and delete features." },
    ],
  },
  {
    title: "Object-Oriented Programming",
    range: "Days 13–15",
    summary: "Modelling real-world entities with classes, objects and inheritance.",
    items: [
      { no: 13, title: "Introduction to OOP (Classes & Objects)", goal: "Model real-world entities using Object-Oriented Programming principles.", bullets: ["Classes as blueprints and objects as instances", "The __init__ constructor and self reference"], build: "Bank Account simulation modeling customer accounts with deposit and withdrawal methods." },
      { no: 14, title: "Methods, Constructors & Attributes", goal: "Build robust class methods and manage object state.", bullets: ["Instance attributes vs class attributes", "Instance methods and object state modification"], build: "Library Book Inventory system tracking book titles, authors, and checkout status." },
      { no: 15, title: "Inheritance & Polymorphism", goal: "Extend existing classes and override methods for code reuse.", bullets: ["Base classes and derived subclasses", "Using super() to initialize parent attributes", "Method overriding"], build: "Employee Management hierarchy with Base Employee, Manager, and Developer subclasses." },
    ],
  },
  {
    title: "Git, APIs & Databases",
    range: "Days 16–22",
    summary: "Version control, live data and persistent storage — the professional developer toolkit.",
    items: [
      { no: 16, title: "Git & GitHub Basics", goal: "Initialize local repositories, stage changes, commit, and push to GitHub.", bullets: ["Version control fundamentals", "git init, git add, git commit, git status", "Linking local repo to GitHub remote"], build: "Create a GitHub repository for your Python project and push your daily challenge scripts." },
      { no: 17, title: "Branching, Merging & Remote Repositories", goal: "Collaborate and manage feature branches in Git.", bullets: ["Creating and switching branches (git checkout -b)", "Merging branches (git merge)", "Handling basic merge conflicts"], build: "Develop a new feature on a separate branch and merge it into main before pushing to GitHub." },
      { no: 18, title: "Mini-Project 2: CLI Contact Book with Persistence", goal: "Build an OOP-based contact book saved to disk with full Git version control.", bullets: ["Combining OOP classes (Contact, ContactBook) with file serialization"], build: "CLI Contact Book application with search, update, delete, and file storage features managed via Git." },
      { no: 19, title: "Working with Built-in Modules", goal: "Leverage Python standard library modules (random, math, datetime, os).", bullets: ["Importing modules (import math, from datetime import datetime)", "Exploring standard library utilities"], build: "Password Generator and Date Calculator utility script." },
      { no: 20, title: "Working with APIs & JSON (requests)", goal: "Fetch live data from web APIs using HTTP requests and JSON parsing.", bullets: ["HTTP GET requests with requests.get()", "Parsing JSON responses into Python dictionaries"], build: "Live Weather Fetcher or Joke Generator pulling data from a public API." },
      { no: 21, title: "Environment Variables & Configuration", goal: "Securely manage API keys and configuration settings using .env files.", bullets: ["The python-dotenv library", "Accessing environment variables via os.environ", "Adding .env to .gitignore"], build: "Configured API script loading secret credentials securely from a local environment file." },
      { no: 22, title: "Database Integration (Introduction to SQLite)", goal: "Store and query structured relational data using SQLite.", bullets: ["Connecting to SQLite databases in Python (sqlite3)", "Executing SQL queries (CREATE TABLE, INSERT, SELECT)"], build: "Todo Application backed by a local SQLite database file." },
    ],
  },
  {
    title: "Capstone Project",
    range: "Days 23–24",
    summary: "Planning and shipping a complete, portfolio-ready capstone application.",
    items: [
      { no: 23, title: "Capstone Project Architecture & Planning", goal: "Design the architecture, schema, and feature scope for the Level 1 Capstone.", bullets: ["Software requirements specification (SRS)", "Defining classes, database schemas, and user interface flow"], build: "Detailed Capstone Blueprint Document outlining features, data models, and milestones." },
      { no: 24, title: "Capstone Build, Print & Final Submission", goal: "Complete, test, document, and publish your Capstone project to GitHub.", bullets: ["Writing professional README.md documentation", "Final code cleanup, testing, and GitHub submission"], build: "Completed Capstone Project fully documented and published on GitHub for Level 1 certification." },
    ],
  },
];

export default function PythonVsCodeGithubPage() {
  return (
    <>
      <Head>
        <title>Python, VS Code & GitHub | Level 1 Curriculum | As-Sa&apos;adah</title>
        <meta
          name="description"
          content="Full 24-day Python + VS Code + GitHub Builder Challenge — from language basics to OOP, Git, APIs, SQLite and a GitHub capstone project."
        />
        <link rel="icon" href="/images.png" />
      </Head>

      <CourseDetailLayout
        icon={<FaCode />}
        badge="Level 1 · Development Track"
        title="Python, VS Code & GitHub"
        tagline="The 30-Day Python + VS Code + GitHub Builder Challenge — from first script to a published GitHub capstone."
        heroImage="/courses/python-development.jpg"
        stats={[
          { icon: <FaChalkboardTeacher />, label: "Instructor", value: "Syed Ahmed Kabir Hashmi" },
          { icon: <FaListOl />, label: "Classes", value: "24" },
          { icon: <FaLayerGroup />, label: "Phases", value: "4" },
          { icon: <FaClock />, label: "Outcome", value: "GitHub Capstone" },
        ]}
        overviewEyebrow="Overview"
        overviewTitle="Build Something Every Single Day"
        overviewParagraphs={[
          "This is a builder-challenge, not a lecture course: every class pairs a core concept with a small, real program students ship the same day — a calculator, a shopping cart, a note-taking app, a live weather fetcher.",
          "Students progress from Python fundamentals through object-oriented programming, Git & GitHub, working APIs and SQLite databases, finishing with a fully documented capstone project published on their own GitHub profile.",
        ]}
        itemLabel="Day"
        phases={phases}
        pdfPath="/courses/pdfs/python-vscode-github-lesson-plan.pdf"
        applyFormUrl="https://forms.gle/BFadm5ZTHHpTtoWCA"
      />
    </>
  );
}
