<template>
  <div class="home">
    <table>
      <tr>
        <td>
          <h1>The Afreeist Society</h1>
        </td>
      </tr>
    </table>
    <table>
      <tr>
        <th>Join Us!</th>
        <th>Newsletter</th>
      </tr>
    </table>
    <p>
      The Afreeist Society is a collection of individuals interested in the ideas and concepts
      of Afreeism.
    </p>
    <p>
      <b>What is afreeism?</b>
    </p>
    <p>
      Afreeism (pronounced ay'-free-ism) posits that the world is best described as causally
      or stochastically deterministic and that this implies the absence of free will.
    </p>
    <p>
      <b>What are the implications of afreeism?</b>
    </p>
    <p>
      Without free will there can be no moral responsibility for one's past actions. That is,
      in Afreeism, there is no concept of desert. No one deserves either punishment or rewards.
      If we do punish or reward, it has to be justified by something other than the notion
      that a person deserves punishment or reward. This idea that no one deserves anything
      affects how we envision social
      policy and our own personal philosophy. For example, afreeism implies:
    </p>
    <p>
      1. Our notion of crime and punishment should not be based on retribution, but rather on
      deterrence, rehabilitation, and (occasionally) on separation.
    </p>
    <p>
      2. Our notion of a fair distribution of society's benefits should not be based on what people
      deserve, but rather on a bedrock of equality modified to the extent necessary to provide
      incentives.
    </p>
    <p>3. Our relationships with other people should be based on tolerance.</p>
    <p>
      4. Our own lives should be animated by engagement, but also by self-acceptance. Guilt,
      regret, remorse, shame, do not make sense in a deterministic world.
    </p>
    <p></p>
    <p></p>
    <p>
      <b>How can I learn more about afreesim?</b>
    </p>
    <p>
      If you
      wish to explore these ideas, a good starting point is the Afreeist Handbook.
    </p>
    <routerLink :to="{name: 'Faq'}">
      <button>Faq</button>
    </routerLink>
    <br />
    <routerLink :to="{name: 'C00A_Contents'}">Contents</routerLink>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
};
</script>
<style>
p {
  text-align: left;
  color: #000000;
}
h1 {
  text-align: left;
  color: #000000;
  background-color: #63c7c2;
  text-align: center;
}
table, tr, th, td {
  border: 1px solid black;
  width: 100%;
  text-align: center;
  background-color: #63c7c2;
  padding: 5px;
  margin: 20px;
}
</style>
