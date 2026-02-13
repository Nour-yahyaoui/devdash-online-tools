'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FiPlay, FiCopy, FiCheck, FiRefreshCw,
  FiMaximize2, FiMinimize2, FiCode
} from 'react-icons/fi';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function PlaygroundPage() {
  // This is the ACTUAL code that gets displayed in the editor
  const [editorCode, setEditorCode] = useState(`<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Hello World!</h1>
  <p>This is a paragraph.</p>
  <button onclick="alert('Button clicked!')">Click me</button>
</body>
</html>`);
  
  // This is the code that's CURRENTLY running in the preview
  const [runningCode, setRunningCode] = useState(editorCode);
  
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // RUN button - ONLY updates runningCode (preview)
  const runCode = () => {
    setIsRunning(true);
    setRunningCode(editorCode); // Update the preview code
    setTimeout(() => setIsRunning(false), 300);
  };

  // Reset to default
  const resetEditor = () => {
    const defaultCode = '<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello World!</h1>\n</body>\n</html>';
    setEditorCode(defaultCode);
    // DON'T update runningCode - preview stays the same until RUN is clicked
  };

  // Clear everything
  const clearEditor = () => {
    setEditorCode('');
    // DON'T update runningCode - preview stays the same
  };

  // Copy code to clipboard
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(editorCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <DashboardLayout pageTitle="HTML Playground" showBackButton={true}>
      <div className={`flex flex-col h-[calc(100vh-120px)] ${isFullscreen ? 'fixed inset-0 z-50 bg-white p-4' : ''}`}>
        
        {/* Simple Toolbar */}
        <div className="bg-white rounded-t-xl border border-gray-200 p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-blue-100 rounded-lg">
              <FiCode className="text-blue-600" size={18} />
            </div>
            <span className="text-sm font-medium text-gray-700">HTML Editor</span>
          </div>

          <div className="flex items-center gap-2">
            {/* RUN BUTTON - Only this updates the preview */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={runCode}
              disabled={isRunning}
              className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg text-sm font-bold shadow-lg hover:bg-green-700 transition-all disabled:opacity-50"
            >
              {isRunning ? (
                <>
                  <FiRefreshCw size={18} className="animate-spin" />
                  RUNNING...
                </>
              ) : (
                <>
                  <FiPlay size={18} />
                  ▶ RUN HTML
                </>
              )}
            </motion.button>

            <div className="w-px h-6 bg-gray-300 mx-2" />

            <button
              onClick={copyToClipboard}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="Copy HTML"
            >
              {copied ? <FiCheck size={18} className="text-green-600" /> : <FiCopy size={18} className="text-gray-600" />}
            </button>
            
            <button
              onClick={resetEditor}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="Reset to default"
            >
              <FiRefreshCw size={18} className="text-gray-600" />
            </button>
            
            <button
              onClick={clearEditor}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="Clear all"
            >
              <span className="text-gray-600 text-lg leading-none">🗑️</span>
            </button>
            
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
            >
              {isFullscreen ? <FiMinimize2 size={18} className="text-gray-600" /> : <FiMaximize2 size={18} className="text-gray-600" />}
            </button>
          </div>
        </div>

        {/* Main Editor + Preview */}
        <div className="flex-1 flex flex-col lg:flex-row gap-4 mt-4 min-h-0">
          
          {/* Editor Panel - Left Side */}
          <div className="flex-1 flex flex-col bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
            <div className="bg-gray-800 px-4 py-3 text-white text-sm font-mono flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FiCode />
                index.html
              </span>
              <span className="text-xs text-gray-400">
                Type here - preview won't change until you click RUN
              </span>
            </div>
            
            <textarea
              value={editorCode}
              onChange={(e) => setEditorCode(e.target.value)}
              className="flex-1 w-full p-4 font-mono text-sm bg-gray-900 text-gray-100 resize-none outline-none"
              spellCheck="false"
              placeholder="<!-- Write your HTML here. Click RUN to see result. -->"
            />
            
            {/* Editor Status */}
            <div className="bg-gray-800 px-4 py-2 text-xs text-gray-400 border-t border-gray-700 flex justify-between">
              <span>Lines: {editorCode.split('\n').length}</span>
              <span>Characters: {editorCode.length}</span>
              <span>Unsaved changes</span>
            </div>
          </div>

          {/* Preview Panel - Right Side */}
          <div className="flex-1 flex flex-col bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 flex items-center justify-between border-b">
              <div className="flex items-center gap-2">
                <span>🔍 Preview</span>
              </div>
              <div className="flex items-center gap-3">
                {/* Show if preview is stale */}
                {editorCode !== runningCode && (
                  <span className="text-xs text-amber-600 flex items-center gap-1">
                    <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                    Stale - Click RUN
                  </span>
                )}
                <span className="text-xs text-gray-500">
                  Last run: {runningCode === editorCode ? 'Current' : 'Outdated'}
                </span>
              </div>
            </div>
            
            <div className="flex-1 bg-white overflow-auto">
              {runningCode.trim() === '' ? (
                <div className="h-full flex items-center justify-center text-gray-400 text-sm">
                  <div className="text-center">
                    <div className="text-4xl mb-3">📝</div>
                    <p>No HTML to preview</p>
                    <p className="text-xs mt-2">Write some HTML and click RUN</p>
                  </div>
                </div>
              ) : (
                <iframe
                  ref={iframeRef}
                  srcDoc={runningCode} // This only changes when RUN is clicked
                  className="w-full h-full border-0"
                  title="preview"
                  sandbox="allow-scripts allow-forms allow-same-origin"
                />
              )}
            </div>

            {/* Preview Status Bar */}
            <div className="bg-gray-50 border-t px-4 py-2 text-xs text-gray-500 flex items-center justify-between">
              <span>Preview Status: {runningCode === editorCode ? '✅ Up to date' : '⏳ Needs update'}</span>
              <span>Click RUN to refresh preview</span>
            </div>
          </div>
        </div>

        {/* Simple Instructions */}
        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="text-xs text-blue-700">
            <strong>💡 How to use:</strong> Type your HTML code in the left panel. The preview on the right 
            <strong className="mx-1">DOES NOT UPDATE</strong> while you type. Click 
            <span className="bg-green-600 text-white px-2 py-0.5 rounded mx-1 text-xs font-bold">▶ RUN HTML</span> 
            to see your changes. You have full control!
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}