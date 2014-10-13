---
layout: post
title: Rich Search
terms:
  - name: "Search = 'btc'"
    image: btc
  - name: "Search = 'arcade fire reflektor'"
    image: album
  - name: "Search = 'HRD cafe'"
    image: restaurant
  - name: "Search = 'Marin headlands'"
    image: place
  - name: "Search = 'Google'"
    image: company
  - name: "Search = 'SQ11'"
    image: flight
  - name: "Search = 'redsox score'"
    image: scores
  - name: "Search = 'GOOG'"
    image: stock
  - name: "Search = 'moneyball'"
    image: book
  - name: "Search = 'the social network"
    image: movie
  - name: "Search = 'weezer shows'"
    image: shows
---

Google initially started as an intermediary. You submitted a search and
it suggested the best sources of information: Webpages sorted by relevance
according to its [PageRank](http://en.wikipedia.org/wiki/PageRank) algorithm.

After trillions of searches, patterns of information requests emerged.
Weather, Sports Scores, Biographic information, travel information,
food recipes, etc...

A solid user experience reduces friction when
presenting a solution for the end-user. It seems natural that
Google would reduce the amount of clicking and reading you need to
perform to find the exact information you are looking for. Google
realized that its users weren't necessarily looking for webpages to do more of
their own research, but that they wanted immediate answers.

I wrote about this Search UX a few years ago in a post about "[intent driven
design](http://www.hitting406.com/2012/06/08/intent-driven-design.html)".

## Specificity

With specific searches about quantifiable, specific, or consistent
information, we are able to present the user a solid information result
without requiring them to qualify the information themselves (which
requires additional effort).

## What's under the hood?

So how is Google doing all of this? How do they know what I'm looking
for and how do they surface the most relevant data to me?

The answer, is a combination of linquistic analysis and mapping of
common data into standards refered to as the [Semantic
Web](http://en.wikipedia.org/wiki/Semantic_Web).

The Semantic Web is built upon a foundation of standard data formats
described by something called the Resource Description Framework (RDF).
Basically, its aim is to describe the common data models that we want to
interact with regularly.

Unfortunately, RDF was complex and didn't gain mass adoption. Google
sought a simpler standard that it could use to improve its search
results.

In 2011,
[Google](http://googlewebmastercentral.blogspot.com/2011/06/introducing-schemaorg-search-engines.html),
[Yahoo](http://www.ysearchblog.com/2011/06/02/introducing-schema-org-a-collaboration-on-structured-data/)
and
[Bing](http://blogs.bing.com/search/2011/06/02/introducing-schema-org-bing-google-and-yahoo-unite-to-build-the-web-of-objects/)
announced [Schema.org](http://www.schema.org), an initiative to standardize data markup on webpages.

Schema.org uses a new standard for structured data markup called
[Microdata](http://en.wikipedia.org/wiki/Microdata_(HTML)) which derives
much of its design from RDF and Microformats.

Adoption must be improving rapidly, as I've personally witnessed an
influx of Rich Snippets powered by Microdata in my search results. I've
attempted to catalouge them below. If you want to add an entry, feel
free to submit a [Pull Request on
Github](https://github.com/ajhit406/hitting406.com).


<div class="rsr-img-list">
{% for term in page.terms %}
  <h3>{{ term.name }}</h3>
  <img src="/images/search/{{ term.image }}.png"><br />
{% endfor %}
</div>
