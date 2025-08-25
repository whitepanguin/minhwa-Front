import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

// HomeScreen과 동일한 색상 팔레트 사용
const colors = {
  primary: "#8B7355", // 모카 무스의
  secondary: "#D4C4A8", // 밝은 모카
  accent: "#5D4E37", // 진한 모카
  white: "#FFFFFF",
  black: "#1A1A1A",
  gray: "#F5F5F5",
  darkGray: "#666666",
  lightGray: "#E8E8E8",
  overlay: "rgba(26, 26, 26, 0.3)",
  paperWhite: "#F0F0F0",
  inkBlack: "#333333",
  overlayLight: "rgba(255, 255, 255, 0.2)",
  traditionalBlack: "#222222",
  hanjiDark: "#999999",
  error: "#E74C3C",
  success: "#27AE60",
};

export const styles = StyleSheet.create({
  // 전체 컨테이너
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  // 헤더 스타일
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "web" ? 20 : 50,
    paddingHorizontal: width * 0.04,
    paddingBottom: height * 0.02,
    backgroundColor: colors.white,
    zIndex: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  backButton: {
    width: Math.min(width * 0.08, 40),
    height: Math.min(width * 0.08, 40),
    borderRadius: Math.min(width * 0.08, 40) / 2,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.inkBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  backButtonText: {
    fontSize: Math.min(width * 0.04, 24),
    color: colors.white,
    fontWeight: "bold",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Bold" : "sans-serif-bold",
  },
  headerTitle: {
    fontSize: Math.min(width * 0.035, 22),
    fontWeight: "bold",
    color: colors.traditionalBlack,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Bold" : "sans-serif-bold",
  },
  headerSpacer: {
    width: Math.min(width * 0.08, 40),
  },

  // 배경 이미지 스타일
  backgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    opacity: 0.1,
  },
  backgroundOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.white,
  },

  // 메인 컨텐츠
  content: {
    flex: 1,
    paddingHorizontal: width * 0.04,
    paddingTop: height * 0.02,
  },
  formContainer: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: width * 0.04,
    shadowColor: colors.inkBlack,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },

  // 환영 텍스트
  welcomeText: {
    fontSize: Math.min(width * 0.04, 24),
    fontWeight: "bold",
    color: colors.traditionalBlack,
    textAlign: "center",
    marginBottom: height * 0.01,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Bold" : "sans-serif-bold",
  },
  subtitleText: {
    fontSize: Math.min(width * 0.025, 16),
    color: colors.darkGray,
    textAlign: "center",
    marginBottom: height * 0.04,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Regular" : "sans-serif",
  },

  // 입력 필드 그룹
  inputGroup: {
    marginBottom: height * 0.025,
  },
  inputLabel: {
    fontSize: Math.min(width * 0.025, 16),
    fontWeight: "600",
    color: colors.traditionalBlack,
    marginBottom: height * 0.01,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Medium" : "sans-serif-medium",
  },
  input: {
    borderWidth: 2,
    borderColor: colors.lightGray,
    borderRadius: 12,
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.015,
    fontSize: Math.min(width * 0.025, 16),
    backgroundColor: colors.white,
    color: colors.traditionalBlack,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Regular" : "sans-serif",
    shadowColor: colors.inkBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  inputError: {
    borderColor: colors.error,
    backgroundColor: colors.white,
  },

  // 에러 텍스트
  errorText: {
    fontSize: Math.min(width * 0.02, 14),
    color: colors.error,
    marginTop: height * 0.005,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Regular" : "sans-serif",
  },

  // 필수 표시
  requiredText: {
    color: colors.error,
    fontWeight: "bold",
  },

  // 약관 동의 섹션
  agreementSection: {
    marginBottom: height * 0.04,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height * 0.015,
  },
  checkbox: {
    width: Math.min(width * 0.05, 24),
    height: Math.min(width * 0.05, 24),
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.lightGray,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    marginRight: width * 0.02,
    shadowColor: colors.inkBlack,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkboxText: {
    fontSize: Math.min(width * 0.025, 16),
    color: colors.white,
    fontWeight: "bold",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Bold" : "sans-serif-bold",
  },
  checkboxLabel: {
    fontSize: Math.min(width * 0.025, 16),
    color: colors.traditionalBlack,
    flex: 1,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Regular" : "sans-serif",
  },

  // 회원가입 버튼
  signUpButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: height * 0.02,
    alignItems: "center",
    marginBottom: height * 0.03,
    shadowColor: colors.inkBlack,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  signUpButtonText: {
    fontSize: Math.min(width * 0.03, 18),
    fontWeight: "bold",
    color: colors.white,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Bold" : "sans-serif-bold",
  },

  // 로그인 링크
  loginLinkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginLinkText: {
    fontSize: Math.min(width * 0.025, 16),
    color: colors.darkGray,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Regular" : "sans-serif",
  },
  loginLink: {
    fontSize: Math.min(width * 0.025, 16),
    color: colors.primary,
    fontWeight: "600",
    textDecorationLine: "underline",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Medium" : "sans-serif-medium",
  },
});
