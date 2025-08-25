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
  google: "#DB4437",
  kakao: "#FEE500",
  naver: "#03C75A",
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

  // 비밀번호 입력 컨테이너
  passwordContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    borderWidth: 2,
    borderColor: colors.lightGray,
    borderRadius: 12,
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.015,
    paddingRight: width * 0.08, // 눈 아이콘 공간 확보
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
  eyeButton: {
    position: "absolute",
    right: width * 0.02,
    padding: width * 0.01,
  },
  eyeButtonText: {
    fontSize: Math.min(width * 0.025, 16),
  },

  // 에러 텍스트
  errorText: {
    fontSize: Math.min(width * 0.02, 14),
    color: colors.error,
    marginTop: height * 0.005,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Regular" : "sans-serif",
  },

  // 비밀번호 찾기
  forgotPasswordContainer: {
    alignItems: "flex-end",
    marginBottom: height * 0.03,
  },
  forgotPasswordText: {
    fontSize: Math.min(width * 0.02, 14),
    color: colors.primary,
    textDecorationLine: "underline",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Medium" : "sans-serif-medium",
  },

  // 로그인 버튼
  loginButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: height * 0.02,
    alignItems: "center",
    marginBottom: height * 0.04,
    shadowColor: colors.inkBlack,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  loginButtonText: {
    fontSize: Math.min(width * 0.03, 18),
    fontWeight: "bold",
    color: colors.white,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Bold" : "sans-serif-bold",
  },

  // 소셜 로그인 섹션
  socialLoginSection: {
    marginBottom: height * 0.04,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height * 0.03,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.lightGray,
  },
  dividerText: {
    fontSize: Math.min(width * 0.02, 14),
    color: colors.darkGray,
    marginHorizontal: width * 0.03,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Regular" : "sans-serif",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: width * 0.015,
  },
  socialButton: {
    flex: 1,
    borderWidth: 2,
    borderColor: colors.lightGray,
    borderRadius: 12,
    paddingVertical: height * 0.015,
    alignItems: "center",
    backgroundColor: colors.white,
    shadowColor: colors.inkBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  socialButtonText: {
    fontSize: Math.min(width * 0.025, 16),
    fontWeight: "600",
    color: colors.traditionalBlack,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Medium" : "sans-serif-medium",
  },

  // 회원가입 링크
  signUpLinkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpLinkText: {
    fontSize: Math.min(width * 0.025, 16),
    color: colors.darkGray,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Regular" : "sans-serif",
  },
  signUpLink: {
    fontSize: Math.min(width * 0.025, 16),
    color: colors.primary,
    fontWeight: "600",
    textDecorationLine: "underline",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Medium" : "sans-serif-medium",
  },
});
