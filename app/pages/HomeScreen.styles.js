import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

// 2025년 트렌드 색상: 모카 무스의 + 블랙/화이트
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
  paperWhite: "#F0F0F0", // Added for new styles
  inkBlack: "#333333", // Added for new styles
  overlayLight: "rgba(255, 255, 255, 0.2)", // Added for new styles
  traditionalBlack: "#222222", // Added for new styles
  hanjiDark: "#999999", // Added for new styles
};

export const styles = StyleSheet.create({
  // 전체 컨테이너
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  // ===== HEADER STYLES =====
  header: {
    width: "100vw",
    height: "100vh",
    position: "relative",
    marginTop: Platform.OS === "web" ? 0 : 0,
  },
  headerBackground: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  headerGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.overlay,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: height * 0.06,
    paddingHorizontal: width * 0.04,
    paddingBottom: height * 0.025,
    zIndex: 10,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.025,
  },
  logo: {
    fontSize: Math.min(width * 0.035, 28),
    fontWeight: "bold",
    color: colors.paperWhite,
    marginRight: width * 0.05,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Bold" : "sans-serif-bold",
    textShadowColor: colors.inkBlack,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  navMenu: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.04,
  },
  navItem: {
    paddingVertical: height * 0.01,
  },
  navText: {
    color: colors.paperWhite,
    fontSize: Math.min(width * 0.02, 16),
    fontWeight: "500",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Medium" : "sans-serif-medium",
    textShadowColor: colors.inkBlack,
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  languageButton: {
    backgroundColor: colors.overlayLight,
    paddingHorizontal: width * 0.015,
    paddingVertical: height * 0.008,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.paperWhite,
  },
  languageText: {
    color: colors.paperWhite,
    fontSize: Math.min(width * 0.015, 12),
    fontWeight: "600",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Bold" : "sans-serif-bold",
  },
  userMenu: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.02,
  },
  userButton: {
    paddingHorizontal: width * 0.015,
    paddingVertical: height * 0.008,
  },
  userButtonText: {
    color: colors.paperWhite,
    fontSize: Math.min(width * 0.018, 14),
    fontWeight: "500",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Medium" : "sans-serif-medium",
    textShadowColor: colors.inkBlack,
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  slideButton: {
    position: "absolute",
    bottom: height * 0.05,
    right: width * 0.05,
    width: Math.min(width * 0.06, 50),
    height: Math.min(width * 0.06, 50),
    backgroundColor: colors.overlayLight,
    borderRadius: Math.min(width * 0.06, 50) / 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.paperWhite,
  },
  slideButtonText: {
    color: colors.paperWhite,
    fontSize: Math.min(width * 0.03, 24),
    fontWeight: "bold",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Bold" : "sans-serif-bold",
  },

  // ===== MAIN STYLES =====
  main: {
    paddingVertical: height * 0.05,
    paddingHorizontal: width * 0.025,
    backgroundColor: colors.hanjiLight,
  },
  sectionTitle: {
    fontSize: Math.min(width * 0.032, 26),
    fontWeight: "bold",
    color: colors.traditionalBlack,
    textAlign: "center",
    marginBottom: height * 0.04,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Bold" : "sans-serif-bold",
    textShadowColor: colors.traditionalGray,
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  mainGrid: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: width * 0.015,
  },
  mainItem: {
    width: Math.min(width * 0.15, 120),
    height: Math.min(width * 0.15, 120),
    backgroundColor: colors.paperWhite,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: colors.inkBlack,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: colors.hanjiDark,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  mainItemImage: {
    width: "100%",
    height: "100%",
  },
  mainItemOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  mainItemTextContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  mainItemOverlayText: {
    fontSize: Math.min(width * 0.018, 14),
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Bold" : "sans-serif-bold",
    textShadowColor: colors.inkBlack,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  mainItemText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.traditionalBlack,
    textAlign: "center",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Medium" : "sans-serif-medium",
  },
  mainTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    gap: 25,
  },

  // ===== GALLERIES STYLES =====
  galleries: {
    paddingVertical: "60px",
    paddingHorizontal: "20px",
    backgroundColor: colors.hanji,
    width: "100vw",
    height: "600px",
  },
  galleryContainer: {
    height: "450px",
    overflow: "hidden",
    marginTop: "30px",
    width: "100vw",
  },
  gallerySlide: {
    flexDirection: "row",
    height: "400px",
  },
  galleryCard: {
    width: "calc(20vw - 24px)",
    height: "400px",
    marginRight: "24px",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: colors.inkBlack,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: colors.hanjiDark,
  },
  galleryCardImage: {
    width: "100%",
    height: "100%",
  },
  galleryCardOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(44, 44, 44, 0.8)",
    padding: "20px",
  },
  galleryCardContent: {
    flex: 1,
  },
  galleryCardTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: colors.paperWhite,
    marginBottom: "5px",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Bold" : "sans-serif-bold",
  },
  galleryCardSubtitle: {
    fontSize: "14px",
    color: colors.hanjiLight,
    marginBottom: "15px",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Regular" : "sans-serif",
  },
  galleryCardInfo: {
    gap: "5px",
  },
  galleryCardLocation: {
    fontSize: "12px",
    color: colors.paperWhite,
    fontWeight: "500",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Medium" : "sans-serif-medium",
  },
  galleryCardDate: {
    fontSize: "11px",
    color: colors.hanjiLight,
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Regular" : "sans-serif",
  },
  gallerySlideButton: {
    position: "absolute",
    bottom: "20px",
    right: "20px",
    width: "50px",
    height: "50px",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: "25px",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.paperWhite,
  },
  gallerySlideButtonText: {
    color: colors.paperWhite,
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily:
      Platform.OS === "ios" ? "AppleSDGothicNeo-Bold" : "sans-serif-bold",
  },

  // ===== FOOTER STYLES =====
  footer: {
    backgroundColor: colors.black,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  footerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  footerSection: {
    flex: 1,
    marginRight: 20,
  },
  footerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
    marginBottom: 15,
  },
  footerText: {
    fontSize: 14,
    color: colors.lightGray,
    marginBottom: 8,
    lineHeight: 20,
  },
  footerBottom: {
    borderTopWidth: 1,
    borderTopColor: colors.darkGray,
    paddingTop: 20,
    alignItems: "center",
  },
  footerCopyright: {
    fontSize: 12,
    color: colors.darkGray,
  },
});
