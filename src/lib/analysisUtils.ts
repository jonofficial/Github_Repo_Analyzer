export const analyzeFileContent = async (apiKey: string, path: string, content: string) => {
  if (!apiKey) {
    throw new Error('Please enter your OpenAI API key first');
  }

  const truncatedContent = content.slice(0, 5000);
  const prompt = `Analyze the following code file and explain its purpose and functionality:\n\nFile path: ${path}\n\nCode:\n${truncatedContent}`;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // or "gpt-4"
        messages: [
          { role: "system", content: "You are a helpful assistant that performs static analysis of code files and explains what they do." },
          { role: "user", content: prompt }
        ],
        temperature: 0.2,
        max_tokens: 1000,
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to analyze file');
    }

    const data = await response.json();
    return data.choices[0].message.content || "No analysis returned.";
  } catch (error: any) {
    if (error.message.includes('Rate limit')) {
      await new Promise(resolve => setTimeout(resolve, 30000));
      return analyzeFileContent(apiKey, path, content);
    }
    throw error;
  }
};

export const getFileExtension = (path: string): string => {
  const parts = path.split('.');
  return parts.length > 1 ? parts.pop()?.toLowerCase() || '' : '';
};

export const isTextFile = (path: string): boolean => {
  const textExtensions = [
    'txt', 'md', 'js', 'jsx', 'ts', 'tsx', 'json', 'html', 'css', 'scss',
    'less', 'py', 'java', 'rb', 'php', 'c', 'cpp', 'h', 'hpp', 'sql',
    'yaml', 'yml', 'xml', 'sh', 'bash', 'zsh', 'env', 'config', 'ini'
  ];
  const ext = getFileExtension(path);
  return textExtensions.includes(ext);
};
