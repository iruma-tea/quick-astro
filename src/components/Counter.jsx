import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        カウントアップ
      </button>
    </div>
  );
}
