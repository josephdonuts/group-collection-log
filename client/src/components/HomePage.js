import React from "react";
import GroupSearch from "./GroupSearch";
import FAQ from "./FAQ";

const HomePage = (props) => {
    return (
        <div className="home-page-container text-center grid-y column">
            <h1>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA0CAMAAAAHWGBpAAAAAXNSR0IArs4c6QAAALdQTFRFAAAAsrKnsbGlr6+kr66irKygq6ufqamdqKibpqaapKSYo6KWoaCVn5+UnZ2Sm5uQmpqPmJiNlZSJk5KIj4+FjY2Di4uBiYl/h4d9hYV7hIN6f392fX10e3tyd3dugHRWdXRsfXJVc3Jre3BSeG5Rbm5mbGxkdWtQc2lNcGZMbmRKa2FIZ15GZVxDYlpCXlZAXFQ9WFE8Vk46Uko3Tkg1TEUySEIwQz0uQDoqPDcoOTQmNC4iLiogP/xzvwAAAAF0Uk5TAEDm2GYAAALMSURBVHjanZbZU9RAEIe/uRKwLB+kFDkE16VkOeTS//8JORYQi6NUYKEQpCj5C1zIxIdMNtdkYc3LZtPzza+nZ6a7BTXPquAr/R5RBwIg9wYmVxKLBPYGIlfISAG7TyaXAdFDJSDa/0Omv+3HyaVkqMhRbobt/uQSVSrT3qwnP/YGHsKSqKA4WPhAp3jkFl0mJXzxkIu9YUf5U1HVFh7QjTrKb3BVt0Qu5AYIcZg3rfUlF4pnR0AB/pyZS+R8XjF9P8hUM0HJeoUUHvqgTErWC5rzZTmygH6D1Sy4ar2wK3NVRf8xQhX3s+VbpOcESRQRNiNbNWv0zKDvRmIrK2SB9h58zd1L4p7mrMdH4btoGPFnhMik5KxP0b9Yc/uaSLGVkDOAqoFKwTXcvgK2E1sKeiNUDK6SN6NYs+FmbQLa62/FY3MzSqTZSj41nUk9vsiA32+spJ38azhIPb6jWl6PYc1mkk0aOVvV5eK+BNfjPBi2AMS0++xTLadOI67GrHKJty9ZmkXrq7EY4/KmaFqbc1P125fwaoIHk2ZrMYOCrjPrfhctuGLc6l6REDPJCfxLbZDS22x+TUQiyHJ8MyA4a1gH9wnu0OWkRWeVRTRD1E/gQ1wLg4SgE45bozcyssHz+BgwtIiAB/8d1eZyMpKZr46E42TYIlHC5kKUvA5fTFkbFqrgNLwAYr4nMVrwwMjgLJxA7RQrbxN4BsTww7HQJc7vqA7PpyIZbJVr9rTO4JNelejGmejwyYyNC772smZDwXDCcgoI5lJYQnAavkXv1PQJswBBAnd6Kb9rQaiwMw1FX4uVt0UMJnk/BwQtoEt42rRx2O7f1cwRo5NX1Unz8JmcQu8+2g8tQORg5ZTVO9h/Uie1CBEKAM0FvMeGT+zBWAIepGOJMbtP71JZBu4lgLJ6f4D+Nu047wXIofaAJKwB9wR7DEwCn+p6439A9aIES1LhEQAAAABJRU5ErkJggg=="></img>
                groupcollectionlog.net
            </h1>
            <GroupSearch />
            <FAQ />
        </div>
    );
};

export default HomePage;