*Question 1*


From: marissa@startup.com      
Subject:  Bad design

Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Thanks,      
Marissa

__

From: anthony.you@algolia.com      
To: marissa@startup.com      
Subject: Re: Bad design

Hi Marissa,

Thank you so much for your feedback, and I completely understand your frustration. I'm really sorry to hear that the new design has made it harder for you to clear or delete indexes, especially when you're iterating quickly.

We're constantly working on improving the user experience, so your input is really valuable. I'll pass this on to our product team. In the meantime, if you'd like a faster way to clear or delete indexes, you might find using our API or the command-line interface (CLI) more efficient for those tasks.

You can refer to this documentation about how to use the CLI for clearing and deleting indexes:
- Clearing indexes : https://www.algolia.com/doc/tools/cli/commands/algolia-indices/#algolia-indices-clear
- Deleting indexes : https://www.algolia.com/doc/tools/cli/commands/algolia-indices/#algolia-indices-delete

Let me know if you'd like some guidance on using those tools! I'd be happy to help.

Thanks again for sharing your thoughts,      
Anthony

--

*Question 2*:

From: carrie@coffee.com    
Subject: URGENT ISSUE WITH PRODUCTION!!!!

Since today 9:15am we have been seeing a lot of errors on our website. Multiple users have reported that they were unable to publish their feedbacks and that an alert box with "Record is too big, please contact enterprise@algolia.com".

Our website is an imdb like website where users can post reviews of coffee shops online. Along with that we enrich every record with a lot of metadata that is not for search. I am already a paying customer of your service, what else do you need to make your search work?

Please advise on how to fix this. Thanks.

__

From: anthony.you@algolia.com      
To: carrie@coffee.com      
Subject: Re: URGENT ISSUE WITH PRODUCTION!!!!

Hi Carrie,

I’m really sorry to hear this issue is impacting your site, and thank you for flagging it so quickly! The error message you're seeing (“Record is too big”) happens when a record exceeds the size limits that Algolia enforces for performance reasons.

For your plan, the maximum record size is likely 100 KB per individual record, with a 10 KB average record size across all records. It sounds like the additional metadata you’re enriching the records with, which isn’t meant for search, might be causing the size limit to be exceeded. Please refer to this doc for more information: https://support.algolia.com/hc/en-us/articles/4406981897617-Is-there-a-size-limit-for-my-index-records

To fix this, I suggest either moving some of the non-searchable metadata to an external database or reducing the amount of metadata in the records you send to Algolia.

I’m happy to assist further if you need help implementing the fix.

Best regards,      
Anthony

--

*Question 3*:


From: marc@hotmail.com      
Subject: Error on website

Hi, my website is not working and here's the error:

![error message](./error.png)

Can you fix it please?

__

From: anthony.you@algolia.com      
To: marc@hotmail.com      
Subject: Re: Error on website

Hi Marc,

Thanks for reaching out! I noticed that the error you're seeing is related to "searchkit", which is typically used with Elasticsearch, not Algolia. Are you in the process of transitioning your search to Algolia or integrating Algolia for the first time? If so, I'd be happy to guide you through the setup.

Here are a few questions to help me better understand your situation:
- Are you currently using Algolia on your website, or are you transitioning from another search provider like Elasticsearch?
- Have you installed Algolia’s official libraries, such as "algoliasearch" or "instantsearch.js"?
- Are you encountering any issues specifically related to Algolia after removing "searchkit"?

If you're migrating to Algolia or setting it up, I can provide you with detailed steps and resources. If you're still using another provider and evaluating Algolia, I'd be happy to explain how you can integrate it seamlessly into your website.

Looking forward to hearing back from you and helping you get everything up and running!

Best regards,      
Anthony
