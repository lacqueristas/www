import React from "react"

import Layout from "../Layout"
import PageHat from "../PageHat"
import SectionHeading from "../SectionHeading"

export default function DataPolicy () {
  return <Layout subtitle="Data Policy">
    <PageHat>
      <h1 className="title">
        Data Policy
      </h1>
    </PageHat>

    <article className="section content">
      <SectionHeading>
        What we collect
      </SectionHeading>

      <p>
        Every web application or program collects some amount of data. Ranging from user input to advanced mouse movement tracking. We largely track as much as we can think of and we want you to know exactly what that means.
      </p>

      <aside>
        <p>
          This section will be updated as frequently as we change our tracking. We might not actually track something described in this currently, but we will.
        </p>
      </aside>

      <p>
        We track...
      </p>

      <ul>
        <li>Page request</li>
        <li>Page load</li>
        <li>Browser provided IP address</li>
        <li>Browser provided user agent</li>
        <li>Browser scroll events</li>
        <li>Browser click events</li>
        <li>Browser select events</li>
        <li>Browser keypresses (exception: secure inputs, i.e. credit card forms)</li>
      </ul>

      <SectionHeading>
        Where we send data
      </SectionHeading>

      <p>
        We store this information in various places and usually duplicated to various services. For example, we store page requests in: Google Analytics, Mixpanel, and our own activity tracker. Unilaterally we store this information in our personal warehouses like AWS RDS, AWS S3, or AWS Redshift. The data will pass through services like AWS Kinesis.
      </p>

      <SectionHeading>
        How we store information
      </SectionHeading>

      <p>
        The way we store information is varried based on the information we're storing. We usually have a continual stream of the data that is indexed by the performer. Anytime we give data to an external service like Google Analytics or Mixpanel they get access to a distinct identifier that we use to map to you, the user. They never and will never get access to this mapping.
      </p>

      <p>
        Externally owned services like Google Analytics or Mixpanel will never get personally identifying information. If they have a breach we don't want you to be harmed. Information like name, address, or phone numbers might transmit over the wire through things like AWS Kinesis, but rests soley in our internal datastores.
      </p>

      <p>
        Information that could have personal importance like comments, messages, or profile data are ecrypted in our datastores. We use SCrypt for encrypting passwords.
      </p>

      <SectionHeading>
        What a breach looks like
      </SectionHeading>

      <p>
        Obviously we don't know what attackers will do and how they'll do it, but we can do our very best to ensure you know what has happened and how it happened. We will use our social media accounts to notify you, our user, and additionally send an email to the address we know.
      </p>

      <p>
        If an attacker were to breach...
      </p>

      <ul>
        <li>
          <strong>Google Analytics, Mixpanel, or external services:</strong> The data is rather meaningless. They would know a lot about our users as a collective, but not individual people.
        </li>
        <li>
          <strong>AWS S3:</strong> They'd have access to images or assets you uploaded and more stream of activity type information as above.
        </li>
        <li>
          <strong>AWS RDS:</strong> They'd have access to all the information you stored, but not access to your personal information, password(s), comments, or identifying data. They could theoretically spend a "long time" on identifing a single user, but it would essentially be at random who they targeted.
        </li>
        <li>
          <strong>Stripe:</strong> They would have access to our purchase and payout information, but not really anything beyond that. Stripe doesn't know who you are and the attacker wouldn't either.
        </li>
        <li>
          <strong>Github:</strong> Were they to access our code...which is weird since it's free and open source... they would know only how our system works and see my crappy notes.
        </li>
      </ul>
    </article>
  </Layout>
}
