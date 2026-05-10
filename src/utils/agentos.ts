// src/utils/agentos.ts — self-evolution playground for AgentOS.
// AgentOS reads the TODO(agentos) markers below and replaces the
// throw-not-implemented stubs with LLM-generated implementations
// via a draft PR. Do not delete the markers.

// TODO(agentos): {"id":"slug_simple","sig":"slugify","desc":"slugify(s) → kebab-case lowercase, alphanumerics + '-', leading/trailing '-' trimmed","assert":["slugify('Hello World')==='hello-world'","slugify('  foo--bar  ')==='foo-bar'","slugify('A!B@C')==='a-b-c'"]}
export function slugify(s: string): string {
  throw new Error("slugify not implemented yet (AgentOS will fill this in)");
}

// TODO(agentos): {"id":"truncate_simple","sig":"truncate","desc":"truncate(s, n) returns s if length<=n else s.slice(0, n-1)+'…'","assert":["truncate('hello', 10)==='hello'","truncate('hello world', 5)==='hell…'"]}
export function truncate(s: string, n: number): string {
  throw new Error("truncate not implemented yet (AgentOS will fill this in)");
}

// TODO(agentos): {"id":"clamp_simple","sig":"clamp","desc":"clamp(n, lo, hi) returns n bounded to [lo, hi]","assert":["clamp(5, 0, 10)===5","clamp(-1, 0, 10)===0","clamp(99, 0, 10)===10"]}
export function clamp(n: number, lo: number, hi: number): number {
  throw new Error("clamp not implemented yet (AgentOS will fill this in)");
}
