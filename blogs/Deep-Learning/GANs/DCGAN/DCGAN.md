---
title : Deep Convolution Generative Adversarial Network
updatedAt : 5-March-2021
category : Deep Learning
shortDescription: "Basic ideas & important resource of Deep Convolution GANs"
readTime: 1 Minute
tags: deep learning, gan, DC gan, convolution gans introduction
slug: deep-learning-gans-dcgan-dcgan
thumbnail: https://raw.githubusercontent.com/Rafat97/rafat97-content-static/main/Deep-Learning/GANs/DCGAN/images/6.png
author: rafat97
---

<p align="center"><img src="https://raw.githubusercontent.com/Rafat97/rafat97-content-static/main/Deep-Learning/GANs/DCGAN/images/6.png" title="Deep Convolution Generative Adversarial Network" alt="Deep Convolution Generative Adversarial Network"></p>

# What is Deep Convolution Generative Adversarial Network(DCGAN)

Deep Convolution Generative Adversarial Network or DCGAN is a **unsupervised representation of learning GANs**. In deep convolutional adversarial pair learns a hierarchy of representations from object parts to scenes in both the generator and discriminator. In short we say, GANs with CNNs architecture 

### In DCGAN paper, They contributions-
1. They gives proper **architectural of Convolutional
GANs**.
2. They **trained discriminators for image classification** tasks and showing **competitive performance** with other unsupervised algorithms.
3. They shows **visualize the filters** learnt by GANs.
4. And they also shows generators have **interesting vector arithmetic properties** allowing for easy
manipulation of many semantic qualities of generated samples

# Some DCGAN examples

![DCGAN Fig-1](https://raw.githubusercontent.com/Rafat97/rafat97-content-static/main/Deep-Learning/GANs/DCGAN/images/1.png)
*Fig : Real Images vs. Fake Images*

![DCGAN Fig-2](https://raw.githubusercontent.com/Rafat97/rafat97-content-static/main/Deep-Learning/GANs/DCGAN/images/2.gif)

*Fig : DCGAN every steps training evaluation in hand written digit*

# Basic structure behind the DCGANs
![DCGAN Fig-2](https://raw.githubusercontent.com/Rafat97/rafat97-content-static/main/Deep-Learning/GANs/DCGAN/images/3.png)

*Fig : Basic Generator & Discriminator in DCGAN*

# Improved network architectural GANs to DCGANs
![DCGAN Fig-2](https://raw.githubusercontent.com/Rafat97/rafat97-content-static/main/Deep-Learning/GANs/DCGAN/images/4.png)

# Resources

[Basic GAN](../BasicGAN/BasicGAN.md)

[Pytorch DCGAN](https://www.kaggle.com/rafat97/pytorch-dcgan)

[Unsupervised Representation Learning with Deep Convolutional Generative Adversarial Networks](https://arxiv.org/abs/1511.06434)

[Papers with code DCGANs](https://paperswithcode.com/method/dcgan)

[DCGAN tensorflow](https://www.tensorflow.org/tutorials/generative/dcgan)

[DCGAN faces pytorch](https://pytorch.org/tutorials/beginner/dcgan_faces_tutorial.html)