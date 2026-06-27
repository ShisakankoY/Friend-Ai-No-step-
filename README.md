# Friend-Ai -No-step- (NSFriendAi)

// Japanese

## 概要

Friend-AIは、単層パーセプトロンのJavaScriptライブラリです。
現在、入力２個にのみ対応しております。
FriendAiのstep関数を使用していないものとなります。
MITライセンス使用、ご注意ください。

## 構文

取得

`const ai = new FriendAi();`

データセット

`ai.dataSet(input, answer);`

* inputは、二次元配列として、直書きの上、代入してください。answerも直書きの上、代入してください。

学習

`ai.train(epochTime, lr);`;

* epochTime = 学習ループ数, lr = 学習率

推論

`const result = ai.inference(input1, input2);`

* inputは、推論する際の入力２つです。
* 推論結果をreturnするため、変数に入れることをおすすめします。

## 使い方

htmlファイルに以下を記入してください。

`<script src="https://shisakankoy.github.io/Friend-AI/friend-ai.js">`

// English

## Overview

Friend-AI is a JavaScript library for a single-layer perceptron.

Currently, it only supports two inputs.

This does not use the FriendAi step function.

Please note that it uses the MIT license.


## Syntax

Data Acquisition

`const ai = new FriendAi();`

Dataset

`ai.dataSet(input, answer);`

* Please hardcode the input as a two-dimensional array and assign the value accordingly. Please hardcode the answer as well and assign the value accordingly.

Training

`ai.train(epochTime, lr);`;

* epochTime = number of training loops, lr = learning rate

Inference

`const result = ai.inference(input1, input2);`

* `input` are the two inputs for inference.

* It is recommended to store the inference result in a variable to return it.


## Usage

Please add the following to your HTML file.


`<script src="https://shisakankoy.github.io/Friend-AI/friend-ai.js">`
