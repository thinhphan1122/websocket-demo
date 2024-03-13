package com.example.websocketdemo.model;

public class Greeting {
    private String context;

    public Greeting() {
    }

    public Greeting(String context) {
        this.context = context;
    }

    public String getContext() {
        return context;
    }

    public void setContext(String context) {
        this.context = context;
    }
}
