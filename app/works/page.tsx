import React from "react";

export default function Works() {
  const items = [
    { id: 1, title: "静大生向けのマインクラフトサーバー", type: "成果物" },
  ];

  return (
    <div>
      <h1>成果物とレポート</h1>
      <p>これまでに作成したレポートや成果物</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {/* 詳細ページへのリンクは後で設定 */}
            <strong>{item.title}</strong> ({item.type})
          </li>
        ))}
      </ul>
    </div>
  );
}
