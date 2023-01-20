# Neel_Portfolio
Data Science Portfolio

# [Project 1: Analyzing the Impact of Social Support on Depression using Causal Inference](https://github.com/nmehta32/Causality-between-support-and-depression)

This project is focused on understanding the impact of social support on individuals who have self-reported a diagnosis of depression on Twitter. Using natural language processing and machine learning techniques, we aimed to determine the causal effect of social support on depression through tweets. The project includes data scraping using the Twint and Tweepy libraries, data preprocessing, and the implementation of advanced machine learning models such as BERT and logistic regression for analysis. The results of the study showed an average treatment effect of 1.96, providing insight into the potential benefits of social support for individuals with depression.

This project is an implementation of image captioning using CNN and LSTM with attention. The goal of the project is to generate a coherent sentence that describes the image. The dataset used for this project is Flicker8k, which has 8k images and each image in the dataset has 5 captions each.

# [Automatic Image Captioning using CNN and LSTM with Attention](https://github.com/nmehta32/ImageCaptioningPytorch)
The approach we take is to tokenize each word into unique numbers and store the relevant words in a custom vocabulary. We pad each batch of captions to have the same length. The model consists of two main blocks: the encoder-CNN and the decoder-RNN. The encoder is a ResNet-50 architecture, which encodes the image with RGB channels into smaller learned channels. The smaller encoded image contains all the useful features of the original image. The decoder is an LSTM with attention mechanism, which generates a sequence of words to form a coherent sentence describing the image.

We implemented the model using PyTorch and achieved an accuracy of 92%. This project demonstrates the ability to use advanced data engineering techniques and machine learning models to solve real-world problems such as image captioning, which has practical applications in areas such as aiding the visually impaired, monitoring systems, and self-driving vehicles.
