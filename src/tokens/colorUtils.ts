/**
 * hex 색상 값에 opacity를 적용하여 rgba 또는 8자리 hex로 변환합니다.
 * @param hexColor - hex 색상 값 (예: "#ffffff" 또는 "#fff")
 * @param opacity - 0~1 사이의 opacity 값
 * @returns 8자리 hex 색상 값
 */
export function withOpacity(hexColor: string, opacity: number): string {
  // opacity 값 검증
  if (opacity < 0 || opacity > 1) {
    console.warn(`Invalid opacity value: ${opacity}. Using 1 instead.`);
    opacity = 1;
  }

  // hex 색상 정규화 (# 제거)
  let hex = hexColor.replace('#', '');

  // 3자리 hex를 6자리로 변환 (#fff -> #ffffff)
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('');
  }

  // 8자리 hex인 경우 opacity 부분 제거하고 새로운 opacity 적용
  if (hex.length === 8) {
    hex = hex.substring(0, 6);
  }

  // 6자리가 아니면 에러
  if (hex.length !== 6) {
    console.error(`Invalid hex color: ${hexColor}`);
    return hexColor;
  }

  // opacity를 16진수로 변환 (0~255 -> 00~FF)
  const alpha = Math.round(opacity * 255);
  const alphaHex = alpha.toString(16).padStart(2, '0');

  return `#${hex}${alphaHex}`;
}
