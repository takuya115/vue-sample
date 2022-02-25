<template>
<div :style="`width: 50%; height: 50%;`">
  <svg viewBox="0 0 100 100" style="border: 1px solid">
    <!-- メーター -->
    <g>
      <circle cx="50" cy="50" r="20" fill="green" />
      <!-- pathで円弧(arc)を描く(計算: http://www.yamatyuu.net/computer/html/svg/arc.html) -->
      <!-- 円弧1(半円) -->
      <!-- <path d="M 0 0 A 40 40 0 0 1 80 0" fill="none" stroke="black" transform="translate(10, 50)"/> -->
      <!-- 円弧2(メーター) -->
      <!-- <path d="M 22,78 a 40 40 -225 1 1 56,0" fill="none" stroke="black" stroke-width="15" /> -->
    </g>  
  </svg>
</div>
</template>

<script>
export default {
  name: 'SvgSample',
}
</script>

<style>

</style>