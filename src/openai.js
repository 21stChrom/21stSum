const openai = require('@openai/api');

const openaiApi = new openai(process.env.OPENAI_API_KEY);

const askOpenai = async (prompt) => {
  const completions = await openaiApi.complete({
      engine: 'davinci',
          prompt,
              maxTokens: 60,
                  n: 1,
                      stop: '\n',
                        });
                          return completions.choices[0].text.trim();
                          };

                          export default askOpenai;
                          