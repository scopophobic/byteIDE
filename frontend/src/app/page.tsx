'use client';

import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const languageMap: Record<string, number> = {
  cpp: 54,
  python: 71,
  go: 60,
};

export default function Home() {
  const [code, setCode] = useState('// Write your code here...');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('cpp');
  const [loading, setLoading] = useState(false);

  const handleRun = async () => {
    setLoading(true);
    const res = await fetch('http://localhost:8000/run', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code,
        input,
        language_id: languageMap[language],
      }),
    });

    const data = await res.json();
    setOutput(data.stdout || data.stderr || 'No output');
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 space-y-4">
      <div className="flex justify-between">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="text-black p-2 rounded"
        >
          <option value="cpp">C++</option>
          <option value="python">Python</option>
          <option value="go">Go</option>
        </select>

        <button
          onClick={handleRun}
          className="bg-green-500 px-6 py-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Running...' : 'Run Code'}
        </button>
      </div>

      <Editor
        height="300px"
        defaultLanguage="cpp"
        language={language === 'cpp' ? 'cpp' : language}
        theme="vs-dark"
        value={code}
        onChange={(val) => setCode(val || '')}
      />

      <textarea
        rows={5}
        placeholder="Standard Input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full text-black p-2 rounded"
      />

      <textarea
        rows={6}
        placeholder="Output"
        value={output}
        readOnly
        className="w-full bg-gray-800 p-2 rounded"
      />
    </div>
  );
}
