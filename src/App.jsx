import React from 'react';
import Page from './components/Page/Page';
import Contact from "./components/Contact/contact"
import Privacy from './components/privacy/privacy';
import Blog from './components/blog/dashboard';
import Post from './components/blog/post';
import Terms from './components/terms/terms'
import { ApolloClient, InMemoryCache, ApolloProvider,HttpLink, from, ApolloError } from "@apollo/client";
import {  onError } from "@apollo/client/link/error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
      graphqlErrors.map(({ message, location, path }) => {
        alert(`Graphql error ${message}`);
      });
    }
  });
  
  const link = from([
    errorLink,
    new HttpLink({ uri: 'https://api-eu-west-2.hygraph.com/v2/cljhj9ggc0nil01tf8cng35vv/master' }),
  ]);
  
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });

const App = () => {
    return (
        <ApolloProvider client={client}>

        <Router>
            <Routes>
                <Route path="/" element={<Page />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="/terms" element={<Terms />} />
            </Routes>
        </Router>
        </ApolloProvider>

    );
}

export default App;