# Neel_Portfolio
Data Science Portfolio

## Acadmic Projects

# [Analyzing the Impact of Social Support on Depression using Causal Inference](https://github.com/nmehta32/Causality-between-support-and-depression)

This project is focused on understanding the impact of social support on individuals who have self-reported a diagnosis of depression on Twitter. Using natural language processing and machine learning techniques, we aimed to determine the causal effect of social support on depression through tweets. The project includes data scraping using the Twint and Tweepy libraries, data preprocessing, and the implementation of advanced machine learning models such as BERT and logistic regression for analysis. The results of the study showed an average treatment effect of 1.96, providing insight into the potential benefits of social support for individuals with depression.

This project is an implementation of image captioning using CNN and LSTM with attention. The goal of the project is to generate a coherent sentence that describes the image. The dataset used for this project is Flicker8k, which has 8k images and each image in the dataset has 5 captions each.

# [Automatic Image Captioning using CNN and LSTM with Attention](https://github.com/nmehta32/ImageCaptioningPytorch)
The approach we take is to tokenize each word into unique numbers and store the relevant words in a custom vocabulary. We pad each batch of captions to have the same length. The model consists of two main blocks: the encoder-CNN and the decoder-RNN. The encoder is a ResNet-50 architecture, which encodes the image with RGB channels into smaller learned channels. The smaller encoded image contains all the useful features of the original image. The decoder is an LSTM with attention mechanism, which generates a sequence of words to form a coherent sentence describing the image.

We implemented the model using PyTorch and achieved an accuracy of 92%. This project demonstrates the ability to use advanced data engineering techniques and machine learning models to solve real-world problems such as image captioning, which has practical applications in areas such as aiding the visually impaired, monitoring systems, and self-driving vehicles.


# [Data Engineering Assignment using Yelp API - Prof. Diana Diaz](https://github.com/nmehta32/Data-Engineering-using-YELP-Api)
<u>Part 1</u> contains several functions to extract information from the flight and airport datasets. The functions are as follows:

    1. extract_hour(time): Extracts hour information from military time.
    2. extract_mins(time): Extracts minute information from military time.
    3. convert_to_minofday(time): Converts military time to minute of day.
    4. calc_time_diff(x, y): Calculates delay times y - x.

The code then filters the flights dataset for flights that departed 20 or more minutes later than scheduled by comparing sched_dep_time and actual_dep_time.

<u>Part 2</u> is a web scraping and API access project. 
1. The main function, retrieve_html, retrieves the raw HTML from a specified URL using the requests library.
2. read_api_key, reads the API key from a text file.
3. location_search_params creates the necessary parameters to make a search request to the Yelp API.
4. api_get_request sends a GET request to the specified API endpoint using the provided headers and URL parameters and returns the response as a JSON. 

With advanced web scraping techniques, we can programmatically retrieve and structure all the reviews for a single restaurant on Yelp. The code uses BeautifulSoup to parse the HTML, extract the reviews and the URL for the next page of reviews. The reviews are structured as a Python dictionary, providing a clean and organized data output. With the provided html_fetcher, we can retrieve all the reviews for a single restaurant with just its URL as input. The end result is a comprehensive list of dictionaries, containing all the relevant information from the reviews. This powerful solution transforms raw HTML data into meaningful insights, streamlining your data analysis process.

## Personal Projects

# [Streamlining Data Insights: An ETL Project for Spotify Analytics](https://github.com/nmehta32/SpotifyETL)

This project showcases a highly efficient and organized data extraction, transformation and loading (ETL) process. The code is written in Python and leverages the power of various libraries such as sqlalchemy, pandas, and requests to perform its operations.

The code starts by extracting data from the Spotify API using requests library. The headers object is defined, which includes the necessary information to make the API call, such as the token and the authorization details. The timestamp of yesterday is calculated and added as a parameter to the API call to ensure that only the relevant data is extracted.

Once the data is extracted, it undergoes a transformation process where it is cleaned and organized into a dictionary object. This dictionary is then transformed into a pandas data frame, which is a highly efficient and organized data structure. The data frame is further validated using a custom-defined method check_if_valid which checks for null values, unique values and the age of the data.

Finally, the data frame is loaded into a SQLite database using the sqlalchemy library. The code creates a table, if it does not already exist, and appends the data to the table.

Overall, this code showcases a highly efficient and organized ETL process that makes use of powerful libraries and a custom-defined method for data validation. The use of a SQLite database ensures the persistence of the data, making it easily accessible for future analysis.
