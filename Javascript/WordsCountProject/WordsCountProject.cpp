#include <iostream>
#include <fstream>
#include <map>
#include <set>
#include <string>
#include <cctype>

using namespace std;

// Convert word to lowercase and remove punctuation
string cleanWord(string word) {
    string cleaned = "";

    for (char ch : word) {
        if (isalpha(ch)) {
            cleaned += tolower(ch);
        }
    }

    return cleaned;
}

int main() {
    string inputFileName, outputFileName;
    ifstream inputFile;
    ofstream outputFile;

    map<string, int> wordFrequency;

    set<string> stopWords = {
        "the", "and", "is", "of", "to", "in", "a", "an", "for", "on", "with","were",'from'
    };

    cout << "Enter input file name: ";
    cin >> inputFileName;

    cout << "Enter output file name: ";
    cin >> outputFileName;

    inputFile.open(inputFileName);

    if (!inputFile) {
        cout << "Error: Could not open input file." << endl;
        return 1;
    }

    string word;

    while (inputFile >> word) {
        word = cleanWord(word);

        if (word.length() > 3 && stopWords.find(word) == stopWords.end()) {
            wordFrequency[word]++;
        }
    }

    inputFile.close();

    outputFile.open(outputFileName);

    if (!outputFile) {
        cout << "Error: Could not open output file." << endl;
        return 1;
    }

    cout << "\nWords with frequency greater than 2:\n";
    cout << "-----------------------------------\n";

    outputFile << "Words with frequency greater than 2:\n";
    outputFile << "-----------------------------------\n";

    for (auto item : wordFrequency) {
        if (item.second > 2) {
            cout << item.first << " : " << item.second << endl;
            outputFile << item.first << " : " << item.second << endl;
        }
    }

    outputFile.close();

    cout << "\nResults saved successfully to " << outputFileName << endl;

    return 0;
}