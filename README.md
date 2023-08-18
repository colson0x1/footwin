# footWin

**footWin** is a TypeScript app that reads football match data from a CSV file and generates insightful reports based on the data. The app employs two distinct design patterns: **Composition** and **Inheritance**. The main focus of the app is to demonstrate the effective use of composition in software design.


![footwin - report on console](https://i.imgur.com/qmyq9mJ.png)

## Project Structure

The project is organized into various components and modules to ensure a clear separation of concerns. Below is an overview of the key components and their roles:

- **CsvFileReader**: An abstract class that provides the foundation for reading CSV files. It's extended by specific classes to map rows and perform file reading operations.

- **MatchReader**: A class that utilizes composition to read match data from CSV files. It accepts a data reader and converts the CSV data into structured MatchData arrays.

- **MatchData**: A type definition representing a single match's data, including date, team names, scores, and match results.

- **Summary**: A class that generates reports based on match data using provided analyzers and output targets. It utilizes composition to achieve this behavior.

- **Analyzer**: An interface defining the structure for analysis classes. Concrete implementations can calculate insights such as wins, losses, or draws.

- **OutputTarget**: An interface specifying the structure for output classes. Implementations can define different ways to display analysis reports, such as console or HTML.

- **Utils**: A utility module containing functions to help with date string parsing.

## Design Patterns

### Composition

The composition design pattern is employed extensively in the **Summary** class. This pattern allows different components to collaborate by aggregating their functionalities. The **Summary** class leverages composition by accepting an analyzer and an output target. This enables the class to generate analysis reports while remaining extensible and easy to maintain.

### Inheritance

While the project emphasizes the composition pattern, the **CsvFileReader** and **MatchReader** components showcase the inheritance design pattern. The **CsvFileReader** abstract class is inherited by the **MatchReader**, which provides specific implementations for mapping rows and reading match data from CSV files.

## Getting Started

1. Clone this repository: `git clone https://github.com/colson0x1/footwin.git`
2. Navigate to the project directory: `cd footwin`
3. Install dependencies: `npm install`
4. Start the app: `npm start`

The app will read data from the "football.csv" file and generate insightful reports.

## Dependencies

- `@types/node`: ^20.5.0
- `concurrently`: ^8.2.0
- `nodemon`: ^3.0.1

## Usage

The app is structured to demonstrate the utilization of composition and inheritance in TypeScript. You can explore the various components to see how they interact and work together to generate football match analysis reports.

---

## Screenshots

### footwin - report on console
![footwin - report on console](https://i.imgur.com/qmyq9mJ.png)

### footwin - html report on browser
![footwin - html report on browser](https://i.imgur.com/L8T2vUu.png)
