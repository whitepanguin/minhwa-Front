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
};

export const styles = StyleSheet.create({
  // 전체 컨테이너
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  // ===== HEADER STYLES =====
  header: {
    width: width,
    height: height,
    position: "relative",
    marginTop: Platform.OS === "web" ? 0 : 0, // 웹에서는 상단 여백 제거
  },
  headerBackground: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  headerOverlay: {
    flex: 1,
    backgroundColor: colors.overlay,
    justifyContent: "flex-start",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.white,
    textShadowColor: colors.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  headerButtons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  navButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  navButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "600",
  },
  userButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  userButtonText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "600",
  },

  // ===== NAV STYLES =====
  nav: {
    flexDirection: "row",
    backgroundColor: colors.white,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
  },
  navText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.black,
  },

  // ===== MAIN STYLES =====
  main: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: colors.gray,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.black,
    textAlign: "center",
    marginBottom: 30,
  },
  mainGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 15,
  },
  mainItem: {
    width: (width - 50) / 2,
    backgroundColor: colors.white,
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  mainItemImage: {
    width: "100%",
    height: 120,
  },
  mainItemText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.black,
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
  },

  // ===== GALLERIES STYLES =====
  galleries: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  galleryContainer: {
    height: 200,
    overflow: "hidden",
  },
  gallerySlide: {
    flexDirection: "row",
    height: "100%",
  },
  galleryItem: {
    width: width - 40,
    marginRight: 20,
    backgroundColor: colors.gray,
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  galleryImage: {
    width: "100%",
    height: 120,
  },
  galleryInfo: {
    padding: 15,
  },
  galleryTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.black,
    marginBottom: 5,
  },
  galleryDescription: {
    fontSize: 14,
    color: colors.darkGray,
    lineHeight: 20,
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
